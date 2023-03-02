import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Rooms from "../../components/Rooms/Rooms";
import "./mainPage.css";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Rooms />
      </div>
    </div>
  );
};

export default MainPage;
