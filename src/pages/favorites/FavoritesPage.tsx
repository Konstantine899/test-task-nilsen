import React from "react";
import { classNames } from "shared/lib/classNames";
import * as styles from "./FavoritesPage.module.scss";

const FavoritesPage = () => {
  return (
    <div className={classNames(styles["favorites-page"])}>FavoritesPage</div>
  );
};

export default FavoritesPage;
