import React, { useEffect } from "react";
import * as styles from "./CatsPage.module.scss";
import { classNames } from "shared/lib/classNames";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "pages/cats";
import { AppDispatch } from "app/providers/store-provider/config/store";
import { getCats } from "pages/cats/model/selectors/selectors";
import { CatsList } from "pages/cats/ui/CatsList/CatsList";

const CatsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cats = useSelector(getCats);

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <div className={classNames(styles["cats-page"])}>
      <CatsList cats={cats} />
    </div>
  );
};
CatsPage.displayName = "CatsPage";

export default CatsPage;
