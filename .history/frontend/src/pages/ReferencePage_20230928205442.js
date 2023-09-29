import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>
                    <h2>{item}</h2>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
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
