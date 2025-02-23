import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./app/app";
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/store-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);
