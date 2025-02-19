import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "app/navbar/Navbar";
import "./styles/index.scss";
import { routeConfig } from "shared/config/routeConfig";
import { Counter } from "entities/counter";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Counter />
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
