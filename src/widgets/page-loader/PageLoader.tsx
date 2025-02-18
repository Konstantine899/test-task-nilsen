import React from "react";
import * as styles from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames";

const PageLoader = () => {
  return (
    <div className={classNames(styles["lds-circle"])}>
      <div></div>
    </div>
  );
};

export default PageLoader;
