import React from "react";
import * as styles from "./NotFoundFavoriteCats.module.scss";

const NotFoundFavoriteCats = () => {
  return (
    <div className={styles['not-found-container']}>
      <h2 className={styles['not-found-title']}>Нет любимых кошек</h2>
      <p className={styles['not-found-message']}>
        Вы пока не добавили ни одного кота в избранное.
      </p>
    </div>
  );
};

export default NotFoundFavoriteCats;
