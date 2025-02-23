import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./app/app";
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/store-provider";
import ErrorBoundary from "app/providers/error-boundary/ErrorBoundary";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <ErrorBoundary>
        <StoreProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </StoreProvider>
    </ErrorBoundary>
);
