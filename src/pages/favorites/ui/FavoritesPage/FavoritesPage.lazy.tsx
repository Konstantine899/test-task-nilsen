import React, {JSX, lazy, Suspense} from "react";
import PageLoader from "widgets/page-loader/PageLoader";

/**
 * Ленивая загрузка компонента FavoritesPage.
 *
 * @constant {React.LazyExoticComponent<React.ComponentType>} FavoritesPageLazy
 * @description Используется для ленивой загрузки страницы избранных котиков.
 */

export const FavoritesPageLazy = lazy(() => import("./FavoritesPage"));

/**
 * Асинхронная версия страницы избранных котиков с поддержкой заглушки во время загрузки.
 *
 * @function FavoritesPageAsync
 * @returns {JSX.Element} JSX-элемент, содержащий FavoritesPageLazy, обёрнутый в Suspense.
 *
 * @description
 * Компонент FavoritesPageAsync использует React.lazy и Suspense для реализации ленивой загрузки страницы избранных котиков.
 * В качестве заглушки используется компонент PageLoader, который отображается, пока FavoritesPage не загружен.
 */

export const FavoritesPageAsync = (): JSX.Element => (
  <Suspense fallback={<PageLoader />}> {/* Отображаем заглушку PageLoader во время загрузки */}
    <FavoritesPageLazy />
  </Suspense>
);
