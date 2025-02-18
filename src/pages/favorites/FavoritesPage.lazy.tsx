import React, { lazy, Suspense } from "react";

export const FavoritesPageLazy = lazy(() => import("./FavoritesPage"));

export const FavoritesPageAsync = () => (
  <Suspense fallback={<div>Loading</div>}>
    <FavoritesPageLazy />
  </Suspense>
);
