import React, { lazy, Suspense } from "react";

const CatsPageLazy = lazy(() => import("./CatsPage"));

export const CatsPageAsync = () => (
  <Suspense fallback={<div>Loading</div>}>
    <CatsPageLazy />
  </Suspense>
);
