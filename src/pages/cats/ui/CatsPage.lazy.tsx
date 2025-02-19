import React, { lazy, Suspense } from "react";
import PageLoader from "widgets/page-loader/PageLoader";

const CatsPageLazy = lazy(() => import("./CatsPage"));

export const CatsPageAsync = () => (
  <Suspense fallback={<PageLoader />}>
    <CatsPageLazy />
  </Suspense>
);
