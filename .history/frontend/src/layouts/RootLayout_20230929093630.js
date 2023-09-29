import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
