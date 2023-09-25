import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const { state } = useLoaderData();

export const OptionsListPages = () => {
  //   const [items, setItem] = useState();
  const items = useLoaderData();

  return (
    <div>
      <h1>OptionsListPages</h1>
      {Object.keys(items).map((item) => {
        return (
          <Link to={`/${item}`} state={items[item]}>
            <h2>{item}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export const OptionsItemLoader = async () => {
  const response = await fetch("https://www.dnd5eapi.co/api");

  return await response.json();
};
