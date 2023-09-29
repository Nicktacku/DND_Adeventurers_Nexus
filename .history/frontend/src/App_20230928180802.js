import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import { DetailsListPage, DetailsLoader } from "./pages/DetailsListPage";
import { OptionsListPages, OptionsItemLoader } from "./pages/OptionsListPages";
import NavBar from "./components/NavBar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<OptionsListPages />}
        loader={OptionsItemLoader}
      />

      <Route
        path="/:title"
        element={<DetailsListPage />}
        loader={({ params }) => DetailsLoader(params.title)}
      />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
