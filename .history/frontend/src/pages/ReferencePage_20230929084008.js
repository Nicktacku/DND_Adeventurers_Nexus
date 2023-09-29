import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ReferencePage = () => {
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
      <p className="h1">References
      </p>
      <div className="container">
        <div className="row">
        {Object.keys(items).map((item) => {
        if (!excluded.includes(item)) {
          return (
            <div className="card" style={{ width: "18rem" }}>
            <Link to={`/${item}`} state={items[item]} className="nav-link col-4">
              
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>


              <h2></h2>
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
