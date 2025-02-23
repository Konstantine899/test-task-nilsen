import React from "react";
import {ICat} from "../../model/types/ICat";
import * as styles from "./CatsList.module.scss";
import {classNames} from "shared/lib/classNames";
import {Cat} from "entities/cat";
import {useSelector} from "react-redux";
import {getCatsError, getCatsLoading,} from "../../model/selectors/selectors";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";


/**
 * Компонент CatsList отображает список котиков с поддержкой заглушек и обработкой ошибок.
 *
 * @param props.cats - Массив котиков для отображения.
 * @param props.skeletonCount - Количество заглушек (необязательно, по умолчанию 10).
 * @returns JSX-элемент списка котиков.
 */

interface CatsListProps {
  cats: ICat[];
}

export const CatsList = (props: CatsListProps) => {
  const { cats } = props;
  const isLoading = useSelector(getCatsLoading);
  const error = useSelector(getCatsError);

  // Если данные загружаются, показываем заглушки
  if (isLoading) {
    return (
      <div className={classNames(styles['cats-list'])}>
        {Array.from({ length: 10 }, (_, index) => (
          <Skeleton key={index} width={256} height={256} borderRadius={"5px"} />
        ))}
      </div>
    );
  }

  // Если произошла ошибка, показываем сообщение
  if (error) {
    return <div className={classNames(styles['cats-list'])}><p>{error}</p></div>;
  }

  // Если данные загружены, показываем список котиков
  return (
    <div className={classNames(styles['cats-list'])}>
      {cats.map((cat, index) => (
        <Cat key={index} cat={cat} />
      ))}
    </div>
  );
};

// Устанавливаем displayName для отладки
CatsList.displayName = "CatsList";
