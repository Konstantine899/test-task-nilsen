import React, { useState } from "react";
import { ICat } from "pages/cats/model/types/ICat";
import { classNames } from "shared/lib/classNames";
import * as styles from "./Cat.module.scss";
import FavoriteBorderIcon from "shared/assets/favorite_border.svg";
import FavoriteIcon from "shared/assets/favorite.svg";

interface CatProps {
  cat: ICat;
}

export const Cat = (props: CatProps) => {
  const { cat } = props;
  const [showHeart, setShowHeart] = useState(false);
  return (
    <div className={classNames(styles.catItem)}>
      <img src={cat.url} alt={cat.id} />
      <div
        className={styles.heartContainer}
        onMouseEnter={() => setShowHeart(true)}
        onMouseLeave={() => setShowHeart(false)}
      >
        {showHeart ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
    </div>
  );
};

Cat.displayName = "Cat";
