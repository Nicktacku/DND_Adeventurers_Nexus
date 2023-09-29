import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import { DetailsListPage, DetailsLoader } from "./pages/DetailsListPage";
import { ReferencePage, ReferenceLoader } from "./pages/ReferencePage";
import NavBar from "./components/NavBar";
import RootLayout from "./layouts/RootLayout";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<ReferencePage />} loader={ReferenceLoader} />

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
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
