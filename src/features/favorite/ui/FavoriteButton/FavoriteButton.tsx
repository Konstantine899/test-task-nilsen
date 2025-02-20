import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/providers/store-provider/config/store";
import FavoriteIcon from "shared/assets/favorite.svg";
import FavoriteBorderIcon from "shared/assets/favorite_border.svg";
import { favoriteAction } from "features/favorite";
import { classNames } from "shared/lib/classNames";
import { isFavoriteSelector } from "features/favorite/model/selectors/selectors";

interface FavoriteButtonProps {
  catId: string;
  className?: string;
}

const FavoriteButton = (props: FavoriteButtonProps) => {
  const { catId, className } = props;
  const dispatch = useDispatch<AppDispatch>();
  const isFavorite = useSelector(isFavoriteSelector(catId));

  const toggleFavorite = () => {
    if (!isFavorite) {
      dispatch(favoriteAction.addFavorite(catId));
    }
    favoriteAction.removeFavorite(catId);
  };

  return (
    <div className={classNames("", {}, [className])} onClick={toggleFavorite}>
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </div>
  );
};

export default FavoriteButton;
