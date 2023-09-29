import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


export const ReferencePage = () => {
  const items = useLoaderData();
  const excluded = [
    "backgrounds",
    "equipment-categories",
    "feats",
    "rules",
    "rule-sections",
  ];

  return (
        <div className="row">
          <h1>hello</h1>
          {Object.keys(items).map((item) => {
            if (!excluded.includes(item)) {
              return (
                <div className="" style={{ width: "18rem" }}>
                  <Link to={`/${item}`} state={items[item]} className="card col-auto m-2 shadow nav-link">

                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item}</h5>
                      </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
  );
};

export const ReferenceLoader = async () => {
  const response = await fetch("https://www.dnd5eapi.co/api/");

  return await response.json();
};
