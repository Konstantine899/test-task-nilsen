import React from "react";
import {RouteProps} from "react-router-dom";
import {CatsPage} from "pages/cats";
import {FavoritesPage} from "pages/favorites";
import {NotFoundPage} from "pages/not-found";

/**
 * Перечисление всех доступных маршрутов приложения.
 */
export enum AppRoutes {
  MAIN = "main",
  FAVORITES = "favorites",
  NOT_FOUND = "not_found",
}

/**
 * Маппинг маршрутов к их путям.
 */
export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.FAVORITES]: "/favorites",
  // Последний
  [AppRoutes.NOT_FOUND]: "*",
};

/**
 * Конфигурация маршрутов приложения.
 */
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: routePath.main, element: <CatsPage /> },
  [AppRoutes.FAVORITES]: {
    path: routePath.favorites,
    element: <FavoritesPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};
