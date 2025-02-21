import React from "react";
import { ICat } from "pages/cats/model/types/ICat";
import { classNames } from "shared/lib/classNames";
import { Cat } from "entities/cat";
import * as styles from "./FavoritesList.module.scss";
import NotFoundFavoriteCats from "pages/favorites/ui/NotFoundFavoriteCats/NotFoundFavoriteCats";

interface FavoritesListProps {
  cats: ICat[];
}

const FavoritesList = (props: FavoritesListProps) => {
  const { cats } = props;

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

export default FavoritesList;
