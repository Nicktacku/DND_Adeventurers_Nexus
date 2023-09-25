import React, { useState, useEffect } from "react";
import { useParams, useLocation, useLoaderData } from "react-router-dom";

export const DetailsListPage = () => {
  //   const [items, setItem] = useState();
  const { title } = useParams();
  const items = useLoaderData();
  //   const getItem = async () => {
  //     const response = await fetch(`https://www.dnd5eapi.co${state}`);
  //     const data = await response.json();
  //     console.log(state);
  //     console.log(data.results);
  //     setItem(data.results);
  //   };
  console.log(items);
  return (
    <div>
      {/* <h1>DetailsListPage - {title}</h1>
      {items.map((item) => {
        return <h2>{item.name}</h2>;
      })} */}
    </div>
  );
};

export const DetailsLoader = async (path) => {
  const response = await fetch(`https://www.dnd5eapi.co/api/${path}`);

  return await response.json();
};
