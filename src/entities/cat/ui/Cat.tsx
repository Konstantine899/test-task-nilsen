import React from "react";
import {ICat} from "pages/cats/model/types/ICat";
import {classNames} from "shared/lib/classNames";
import * as styles from "./Cat.module.scss";
import FavoriteButton from "features/favorite/ui/FavoriteButton/FavoriteButton";
import {UiKitImage} from "shared/ui/UIKitImage/UIKitImage";
import NotFoundImage from "shared/assets/not-found-image.jpg";

/**
 * Интерфейс пропсов для компонента Cat.
 */

interface CatProps {
  cat: ICat;
}

/**
 * Компонент Cat отображает карточку котика с изображением и кнопкой добавления в избранное.
 *
 * @param props.cat - Объект котика, содержащий url изображения, id и другие данные.
 * @returns JSX-элемент карточки котика.
 *
 * @remarks
 * Компонент использует UiKitImage для отображения изображения котика и FavoriteButton для управления состоянием "избранное".
 * Если изображение не найдено, отображается заглушка (NotFoundImage).
 */

export const Cat = (props: CatProps) => {
  const { cat } = props;

  return (
    <div className={classNames(styles['cat-item'])}>
      <UiKitImage src={cat.url} alt={cat.id} spareImage={<NotFoundImage />} />
      <FavoriteButton cat={cat} className={styles['heart-container']} />
    </div>
  );
};

// Устанавливаем displayName для отладки
Cat.displayName = "Cat";