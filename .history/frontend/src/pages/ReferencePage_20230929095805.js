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
    <div className="container ">
      <div className="container ">
        <div className="row d-flex justify-content-center">
        {Object.keys(items).map((item) => {
        if (!excluded.includes(item)) {
          return (
            <div className="card col-5 m-2 shadow" style={{ width: "18rem" }}>
              <Link to={`/${item}`} state={items[item]} className="nav-link">

                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </div>
              </Link>
            </div>
          );
        }
      })}
        </div>
      </div>
    </div>
  );
};

export const ReferenceLoader = async () => {
  const response = await fetch("https://www.dnd5eapi.co/api/");

  return await response.json();
};
