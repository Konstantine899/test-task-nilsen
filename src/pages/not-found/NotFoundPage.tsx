import React from "react";
import * as styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404 - Страница не найдена</h1>
      <p className={styles.message}>
        К сожалению, запрашиваемая страница не существует.
      </p>
    </div>
  );
};

NotFoundPage.displayName = "NotFoundPage";

export default NotFoundPage;
