import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "app/navbar/Navbar";
import "./styles/index.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path={"/about"} element={<div>about</div>} />
        <Route path={"/"} element={<div>Главная</div>} />
      </Routes>
    </div>
  );
};

export default App;
