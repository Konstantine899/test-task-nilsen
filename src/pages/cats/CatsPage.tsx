import React from "react";
import * as styles from "./CatsPage.module.scss";
import { classNames } from "shared/lib/classNames";

const CatsPage = () => {
  return <div className={classNames(styles["cats-page"])}>CatsPage</div>;
};

export default CatsPage;
