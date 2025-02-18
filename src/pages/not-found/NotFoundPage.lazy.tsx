import React, { lazy, Suspense } from "react";
import PageLoader from "widgets/page-loader/PageLoader";

export const NotFoundPageLazy = lazy(() => import("./NotFoundPage"));

export const NotFoundPageAsync = () => (
  <Suspense fallback={<PageLoader />}>
    <NotFoundPageLazy />
  </Suspense>
);
