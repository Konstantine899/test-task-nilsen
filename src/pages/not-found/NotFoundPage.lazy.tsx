import React, { lazy, Suspense } from "react";

export const NotFoundPageLazy = lazy(() => import("./NotFoundPage"));

export const NotFoundPageAsync = () => (
  <Suspense fallback={<div>Loading</div>}>
    <NotFoundPageLazy />
  </Suspense>
);
