import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "app/navbar/Navbar";
import "./styles/index.scss";
import { CatsPage } from "pages/cats";
import { FavoritesPage } from "pages/favorites";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path={"/favorites"} element={<FavoritesPage />} />
        <Route path={"/"} element={<CatsPage />} />
      </Routes>
    </div>
  );
};

export default App;
