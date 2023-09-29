import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

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
      <h1>ReferencePage</h1>
      {Object.keys(items).map((item) => {
        if (!excluded.includes(item)) {
          return (
            <Link to={`/${item}`} state={items[item]}>
              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <h2>{item}</h2>
            </Link>
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
