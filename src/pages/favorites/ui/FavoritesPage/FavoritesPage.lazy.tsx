import React, { lazy, Suspense } from "react";
import PageLoader from "widgets/page-loader/PageLoader";

export const FavoritesPageLazy = lazy(() => import("./FavoritesPage"));

export const FavoritesPageAsync = () => (
  <Suspense fallback={<PageLoader />}>
    <FavoritesPageLazy />
  </Suspense>
);
