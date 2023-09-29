import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className="container-fluid">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
