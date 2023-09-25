import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import DetailsListPage from "./pages/DetailsListPage";
import { OptionsListPages, OptionsItemLoader } from "./pages/OptionsListPages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<OptionsListPages />}
        loader={OptionsItemLoader}
      />

      <Route path="/:title" element={<DetailsListPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
