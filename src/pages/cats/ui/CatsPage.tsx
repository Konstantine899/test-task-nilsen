import React, { useEffect } from "react";
import * as styles from "./CatsPage.module.scss";
import { classNames } from "shared/lib/classNames";
import { useDispatch } from "react-redux";
import { fetchCats } from "pages/cats";
import { AppDispatch } from "app/providers/store-provider/config/store";

const CatsPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return <div className={classNames(styles["cats-page"])}>CatsPage</div>;
};

export default CatsPage;
