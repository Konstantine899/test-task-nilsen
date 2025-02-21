import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/providers/store-provider/config/store";
import FavoriteIcon from "shared/assets/favorite.svg";
import FavoriteBorderIcon from "shared/assets/favorite_border.svg";
import { favoriteAction } from "features/favorite";
import { classNames } from "shared/lib/classNames";
import { isFavoriteSelector } from "features/favorite/model/selectors/selectors";
import { ICat } from "pages/cats/model/types/ICat";

interface FavoriteButtonProps {
  cat: ICat;
  className?: string;
}

const FavoriteButton = (props: FavoriteButtonProps) => {
  const { cat, className } = props;
  const dispatch = useDispatch<AppDispatch>();
  const isFavorite = useSelector(isFavoriteSelector(cat));

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(favoriteAction.removeFavorite(cat.id));
    } else {
      dispatch(favoriteAction.addFavorite(cat));
    }
  };

  return (
    <div className={classNames("", {}, [className])} onClick={toggleFavorite}>
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </div>
  );
};

export default FavoriteButton;
