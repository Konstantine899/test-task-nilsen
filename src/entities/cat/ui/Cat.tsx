import React from "react";
import { ICat } from "pages/cats/model/types/ICat";
import { classNames } from "shared/lib/classNames";
import * as styles from "./Cat.module.scss";
import FavoriteBorderIcon from "shared/assets/favorite_border.svg";

interface CatProps {
  cat: ICat;
}

export const Cat = (props: CatProps) => {
  const { cat } = props;
  return (
    <div className={classNames(styles.catItem)}>
      <img src={cat.url} alt={cat.id} />
      <div className={styles.heartContainer}>
        <FavoriteBorderIcon />
      </div>
    </div>
  );
};

Cat.displayName = "Cat";
