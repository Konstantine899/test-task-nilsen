import React, { useEffect } from "react";
import * as styles from "./CatsPage.module.scss";
import { classNames } from "shared/lib/classNames";
import { useDispatch, useSelector } from "react-redux";
import { catsAction, fetchCats } from "pages/cats";
import { AppDispatch } from "app/providers/store-provider/config/store";
import {
  getCats,
  getCatsHasMore,
  getCatsLoading,
  getCatsPage,
} from "pages/cats/model/selectors/selectors";
import { CatsList } from "pages/cats/ui/CatsList/CatsList";

const CatsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cats = useSelector(getCats);
  const hasMore = useSelector(getCatsHasMore);
  const page = useSelector(getCatsPage);
  const isLoading = useSelector(getCatsLoading);

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 1
      ) {
        dispatch(catsAction.setPage(page + 1));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, page, hasMore, isLoading]);

  return (
    <div className={classNames(styles["cats-page"])}>
      <CatsList cats={cats} />
      <div className={classNames(styles["loading-cats-container"])}>
        {hasMore && <p>{isLoading && "...загружаем котиков..."}</p>}
      </div>
      {!hasMore && <p>Больше котиков нет.</p>}
      <div style={{ height: "256px" }} />
    </div>
  );
};
CatsPage.displayName = "CatsPage";

export default CatsPage;
