import React from "react";
import * as styles from "./NotFoundFavoriteCats.module.scss";

const NotFoundFavoriteCats = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h2 className={styles.notFoundTitle}>Нет любимых кошек</h2>
      <p className={styles.notFoundMessage}>
        Вы пока не добавили ни одного кота в избранное.
      </p>
    </div>
  );
};

export default NotFoundFavoriteCats;
