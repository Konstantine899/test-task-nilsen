import React from "react";
import { RouteProps } from "react-router-dom";
import { CatsPage } from "pages/cats";
import { FavoritesPage } from "pages/favorites";

export enum AppRoutes {
  MAIN = "main",
  FAVORITES = "favorites",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.FAVORITES]: "/favorites",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: routePath.main, element: <CatsPage /> },
  [AppRoutes.FAVORITES]: {
    path: routePath.favorites,
    element: <FavoritesPage />,
  },
};
