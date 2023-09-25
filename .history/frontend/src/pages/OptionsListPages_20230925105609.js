import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const OptionsListPages = ({ items }) => {
  return (
    <div>
      <h1>OptionsListPages</h1>
      {[] ||
        Object.keys(items).map((item) => {
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
  const data = await response.json();

  return data;
};
