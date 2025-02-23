import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "app/providers/store-provider/config/store";
import FavoriteIcon from "shared/assets/favorite.svg";
import FavoriteBorderIcon from "shared/assets/favorite_border.svg";
import {favoriteAction} from "features/favorite";
import {classNames} from "shared/lib/classNames";
import {isFavoriteSelector} from "features/favorite/model/selectors/selectors";
import {ICat} from "pages/cats/model/types/ICat";

interface FavoriteButtonProps {
  cat: ICat; // Объект котика
  className?: string; // Дополнительный класс для стилизации
}

/**
 * Компонент FavoriteButton отображает кнопку добавления/удаления котика в избранное.
 *
 * @param props.cat - Объект котика (содержит id и другие данные).
 * @param props.className - Дополнительный класс для обёртки кнопки.
 * @returns JSX-элемент кнопки с поддержкой состояния "избранное" и эффекта наведения.
 *
 * @remarks
 * Если котик находится в избранном или пользователь навёл курсор на кнопку,
 * отображается иконка FavoriteIcon. В противном случае — FavoriteBorderIcon.
 * При клике выполняется действие добавления/удаления котика в избранное через Redux.
 */

const FavoriteButton = (props: FavoriteButtonProps) => {
  const { cat, className } = props;
  const dispatch = useDispatch<AppDispatch>();
  const isFavorite = useSelector(isFavoriteSelector(cat)); // Селектор для проверки, находится ли котик в избранном
  const [isHover, setIsHover] = useState<boolean>(false); // Локальное состояние для отслеживания наведения курсора на кнопку

  if(!cat.id){
    console.error("Идентификатор кошки отсутствует:", cat);
    return null; // Защита от отсутствия ID
  }

  /**
   * Обработчик клика для добавления/удаления котика в избранное.
   */

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(favoriteAction.removeFavorite(cat.id)); // Удаляем котика из избранного
    } else {
      dispatch(favoriteAction.addFavorite(cat)); // Добавляем котика в избранное
    }
  };

  return (
    <div
      className={classNames("", {}, [className])} // Классы для обёртки кнопки
      onClick={toggleFavorite} // Обработчик клика
      onMouseOver={() => setIsHover(true)} // Обработчик наведения курсора
      onMouseLeave={() => setIsHover(false)} // Обработчик убирания курсора
    >
      {/* Отображение иконки в зависимости от состояния */}
      {isFavorite || isHover ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </div>
  );
};

// Устанавливаем displayName для отладки
FavoriteButton.displayName = "FavoriteButton";

export default FavoriteButton;
