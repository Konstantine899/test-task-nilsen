import React, {lazy, Suspense} from "react";
import PageLoader from "widgets/page-loader/PageLoader";
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "../providers/error-boundary/ErrorBoundary";
import {StoreProvider} from "../providers/store-provider/ui/StoreProvider";

/**
 * Компонент AppAsync представляет асинхронную версию основного приложения.
 *
 * @returns JSX-элемент, содержащий всю структуру приложения с поддержкой ленивой загрузки.
 *
 * @remarks
 * Этот компонент оборачивает приложение в следующие провайдеры:
 * - ErrorBoundary: Глобальная обработка ошибок.
 * - StoreProvider: Провайдер Redux store.
 * - BrowserRouter: Маршрутизация через React Router.
 * Также используется React.lazy и Suspense для ленивой загрузки основного компонента App.
 */

const AppLazy = lazy(() => import("./App"));

export const AppAsync = () => (
    <ErrorBoundary> {/* Глобальная обработка ошибок */}
        <StoreProvider> {/* Провайдер Redux store */}
            <BrowserRouter basename={__PUBLIC_PATH__}> {/* Маршрутизация через React Router */}
                <Suspense fallback={<PageLoader/>}> {/* Заглушка для ленивой загрузки */}
                    <AppLazy/> {/* Ленивая загрузка основного приложения */}
                </Suspense>
            </BrowserRouter>
        </StoreProvider>
    </ErrorBoundary>
);
// Устанавливаем displayName для отладки
AppAsync.displayName = "AppAsync";