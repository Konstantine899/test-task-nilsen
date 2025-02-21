import React, { useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames";
import * as styles from "./FavoritesPage.module.scss";
import { ICat } from "pages/cats/model/types/ICat";
import FavoritesList from "pages/favorites/ui/FavoritesList/FavoritesList";

const FavoritesPage = () => {
  const [favoritesCats, setFavoritesCats] = useState<ICat[]>([]);

  useEffect(() => {
    setFavoritesCats(JSON.parse(localStorage.getItem("favoriteCats")));
  }, []);

  return (
    <div className={classNames(styles["favorites-page"])}>
      <FavoritesList cats={favoritesCats} />
    </div>
  );
};

FavoritesPage.displayName = "FavoritesPage";

export default FavoritesPage;
