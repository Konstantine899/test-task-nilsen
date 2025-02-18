import React from "react";
import * as styles from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames";

const PageLoader = () => {
  return (
    <div className={classNames(styles["lds-roller"])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default PageLoader;
