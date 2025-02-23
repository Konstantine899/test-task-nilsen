import React, {lazy, Suspense} from "react";
import PageLoader from "widgets/page-loader/PageLoader";

/**
 * Асинхронная версия компонента CatsPage.
 *
 * @remarks
 * Использует React.lazy и Suspense для ленивой загрузки CatsPage.
 * В качестве заглушки используется PageLoader.
 */

const CatsPageLazy = lazy(() => import("./CatsPage"));

export const CatsPageAsync = () => (
  <Suspense fallback={<PageLoader />}>
    <CatsPageLazy />
  </Suspense>
);
