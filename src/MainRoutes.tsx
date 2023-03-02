import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";

const MainRoutes = () => {
  let token = localStorage.getItem("tokens");

  return (
    <>
      <Routes>
        <Route path="/" element={token ? <MainPage /> : <LoginPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
