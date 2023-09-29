import React, { useState, useEffect } from "react";
import { useParams, useLocation, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const DetailsListPage = () => {
  //   const [items, setItem] = useState();
  const { title } = useParams();
  const items = useLoaderData();

  console.log(items.results);
  return (
    <div>
      <h1>DetailsListPage - {title}</h1>
      {items.results.map((item) => {
        return <h2>{item.name}</h2>;
      })}
    </div>
  );
};

export const DetailsLoader = async (path) => {
  const response = await fetch(`https://www.dnd5eapi.co/api/${path}`);

  return await response.json();
};
