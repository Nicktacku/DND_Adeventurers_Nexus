import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <h2>hello</h2>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
