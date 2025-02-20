import React from "react";
import { ICat } from "pages/cats/model/types/ICat";
import { classNames } from "shared/lib/classNames";
import * as styles from "./Cat.module.scss";
import FavoriteButton from "features/favorite/ui/FavoriteButton/FavoriteButton";

interface CatProps {
  cat: ICat;
}

export const Cat = (props: CatProps) => {
  const { cat } = props;

  console.log(cat);
  return (
    <div className={classNames(styles.catItem)}>
      <img src={cat.url} alt={cat.id} />
      <FavoriteButton catId={cat.id} className={styles.heartContainer} />
    </div>
  );
};

Cat.displayName = "Cat";
