import React, {lazy, Suspense} from "react";
import PageLoader from "widgets/page-loader/PageLoader";

const AppLazy = lazy(() => import("./App"));

export const AppAsync = () => (
    <Suspense fallback={<PageLoader />}>
        <AppLazy />
    </Suspense>
);
