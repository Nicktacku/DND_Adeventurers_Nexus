import { createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import DetailsListPage from "./pages/DetailsListPage";
import { OptionsListPages, OptionsItemLoader } from "./pages/OptionsListPages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
            exact
            path="/"
            element={<OptionsListPages />}
            loader={OptionsItemLoader}
          />
          <Route exact path="/:title" element={<DetailsListPage />} />

    )
  )
  return (

      <div className="App">
      </div>
  );
}

export default App;
