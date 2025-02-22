import React, {useEffect} from "react";
import * as styles from "./CatsPage.module.scss";
import {classNames} from "shared/lib/classNames";
import {useDispatch, useSelector} from "react-redux";
import {catsAction, fetchCats} from "pages/cats";
import {AppDispatch} from "app/providers/store-provider/config/store";
import {getCats, getCatsHasMore, getCatsLoading, getCatsPage,} from "pages/cats/model/selectors/selectors";
import {CatsList} from "pages/cats/ui/CatsList/CatsList";
import {throttle} from 'shared/lib/throttle'

const CatsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cats = useSelector(getCats);
  const hasMore = useSelector(getCatsHasMore);
  const page = useSelector(getCatsPage);
  const isLoading = useSelector(getCatsLoading);

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch, page]);

// Обработчик прокрутки с throttle
  const handleScroll = throttle(() => {
    if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 1 &&
        hasMore &&
        !isLoading
    ) {
      dispatch(catsAction.setPage(page + 1));
    }
  }, 300); // Ограничение на 300 мс

  useEffect(() => {
    // Добавляем слушатель прокрутки с throttle
    window.addEventListener("scroll", handleScroll);

    // Удаляем слушатель при размонтировании компонента
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, hasMore, isLoading]);

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
