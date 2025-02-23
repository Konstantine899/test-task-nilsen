import React, {memo, useEffect, useState} from "react";
import {classNames} from "shared/lib/classNames";
import * as styles from "./FavoritesPage.module.scss";
import {ICat} from "../../../cats/model/types/ICat";
import FavoritesList from "../FavoritesList/FavoritesList";
import {useSelector} from "react-redux";
import {RootState} from "app/providers/store-provider";

/**
 * Компонент FavoritesPage отображает страницу с избранными котиками.
 *
 * @remarks
 * Этот компонент извлекает список избранных котиков из localStorage и состояния Redux.
 * Если в состоянии Redux обновляется список избранных котиков, компонент перечитывает данные из localStorage.
 */

const FavoritesPage = memo(
    () => {
        const [favoritesCats, setFavoritesCats] = useState<ICat[]>([]);
        const catsFromState = useSelector(
            (state: RootState) => state.favorite.favoriteCats
        );

        /**
         * Эффект для чтения данных из localStorage при монтировании компонента
         * или при изменении списка избранных котиков в состоянии Redux.
         */
        useEffect(() => {
            // Обновляем состояние компонента
            // Читаем данные из localStorage и парсим их как массив ICat[]
            setFavoritesCats(JSON.parse(localStorage.getItem("favoriteCats") || '[]') as ICat[]);
        }, [catsFromState]);

        return (
            <div className={classNames(styles["favorites-page"])}>
                <FavoritesList cats={favoritesCats}/>
            </div>
        );
    }
);

// Устанавливаем displayName для отладки
FavoritesPage.displayName = "FavoritesPage";

export default FavoritesPage;
