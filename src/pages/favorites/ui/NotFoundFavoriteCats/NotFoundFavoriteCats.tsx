import React from "react";
import * as styles from "./NotFoundFavoriteCats.module.scss";

/**
 * Компонент NotFoundFavoriteCats отображает сообщение о том,
 * что у пользователя нет любимых котиков.
 *
 * @returns JSX-элемент с сообщением об отсутствии любимых котиков.
 */

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

// Устанавливаем displayName для отладки
NotFoundFavoriteCats.displayName = "NotFoundFavoriteCats";

export default NotFoundFavoriteCats;
