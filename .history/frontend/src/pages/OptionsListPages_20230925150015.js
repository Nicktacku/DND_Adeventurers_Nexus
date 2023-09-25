import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export const OptionsListPages = () => {
  //   const [items, setItem] = useState();
  const items = useLoaderData();

  return (
    <div>
      <h1>OptionsListPages</h1>
      {Object.keys(items).map((item) => {
        if (item !== "manifest" || item !== "search") {
          return (
            <Link to={`/${item}`} state={items[item]}>
              <h2>{item}</h2>
            </Link>
          );
        }
      })}
    </div>
  );
};

export const OptionsItemLoader = async () => {
  const response = await fetch("https://api.open5e.com/v1/");

  return await response.json();
};
