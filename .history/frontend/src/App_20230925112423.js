import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import DetailsListPage from "./pages/DetailsListPage";
import { OptionsListPages, OptionsItemLoader } from "./pages/OptionsListPages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<OptionsListPages />} loader={OptionsItemLoader}>
        <Route path=":title" element={<DetailsListPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <div className="App"></div>;
}

export default App;
