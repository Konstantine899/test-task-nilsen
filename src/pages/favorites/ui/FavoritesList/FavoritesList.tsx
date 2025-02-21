import React from "react";
import { ICat } from "pages/cats/model/types/ICat";
import { classNames } from "shared/lib/classNames";
import { Cat } from "entities/cat";
import * as styles from "./FavoritesList.module.scss";

interface FavoritesListProps {
  cats: ICat[];
}

const FavoritesList = (props: FavoritesListProps) => {
  const { cats } = props;
  return (
    <div className={classNames(styles["favorites-list"])}>
      {cats.map((cat) => (
        <Cat cat={cat} key={cat.id} />
      ))}
    </div>
  );
};

export default FavoritesList;
