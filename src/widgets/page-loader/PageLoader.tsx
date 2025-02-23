import React from "react";
import * as styles from "./PageLoader.module.scss";
import {classNames} from "shared/lib/classNames";

/**
 * Компонент PageLoader отображает анимированный индикатор загрузки страницы.
 *
 * @param isLoading - Флаг для показа/скрытия загрузчика (необязательно).
 * @returns JSX-элемент загрузчика страницы.
 */

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

// Устанавливаем displayName для отладки
PageLoader.displayName = "PageLoader";

export default PageLoader;
