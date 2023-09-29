import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export const OptionsListPages = () => {
  //   const [items, setItem] = useState();
  const items = useLoaderData();
  const excluded = [
    "backgrounds",
    "equipment-categories",
    "feats",
    "rules",
    "rules-section",
  ];

  return (
    <div>
      <h1>OptionsListPages</h1>
      {Object.keys(items).map((item) => {
        if (excluded.includes(item)) {
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
  const response = await fetch("https://www.dnd5eapi.co/api/");

  return await response.json();
};
