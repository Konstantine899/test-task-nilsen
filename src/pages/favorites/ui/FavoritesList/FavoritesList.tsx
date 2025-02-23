import React from "react";
import {ICat} from "pages/cats/model/types/ICat";
import {classNames} from "shared/lib/classNames";
import {Cat} from "entities/cat";
import * as styles from "./FavoritesList.module.scss";
import NotFoundFavoriteCats from "pages/favorites/ui/NotFoundFavoriteCats/NotFoundFavoriteCats";

/**
 * Интерфейс пропсов для компонента FavoritesList.
 */
interface FavoritesListProps {
  cats: ICat[]; // Массив избранных котиков
}

/**
 * Компонент FavoritesList отображает список избранных котиков.
 *
 * @param props.cats - Массив объектов ICat[], представляющих избранные котики.
 * @returns JSX-элемент со списком избранных котиков или сообщением об отсутствии данных.
 *
 * @remarks
 * Если массив cats пустой, отображается компонент NotFoundFavoriteCats.
 * Для каждого котика создаётся компонент Cat.
 */

const FavoritesList = (props: FavoritesListProps) => {
  const { cats } = props;

  /**
   * Если список избранных котиков пуст, отображаем компонент NotFoundFavoriteCats.
   */

  if (!cats.length) {
    return <NotFoundFavoriteCats />;
  }

  return (
    <div className={classNames(styles["favorites-list"])}>
      {cats.map((cat) => (
        <Cat cat={cat} key={cat.id} />
      ))}
    </div>
  );
};

// Устанавливаем displayName для отладки
FavoritesList.displayName = "FavoritesList";

export default FavoritesList;
