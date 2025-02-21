import React, { useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames";
import * as styles from "./FavoritesPage.module.scss";
import { ICat } from "pages/cats/model/types/ICat";
import FavoritesList from "pages/favorites/ui/FavoritesList/FavoritesList";
import { useSelector } from "react-redux";
import { RootState } from "app/providers/store-provider/config/store";

const FavoritesPage = () => {
  const [favoritesCats, setFavoritesCats] = useState<ICat[]>([]);
  const catsFromState = useSelector(
    (state: RootState) => state.favorite.favoriteCats
  );

  useEffect(() => {
    setFavoritesCats(JSON.parse(localStorage.getItem("favoriteCats")));
  }, [catsFromState]);

  return (
    <div className={classNames(styles["favorites-page"])}>
      <FavoritesList cats={favoritesCats} />
    </div>
  );
};

FavoritesPage.displayName = "FavoritesPage";

export default FavoritesPage;
