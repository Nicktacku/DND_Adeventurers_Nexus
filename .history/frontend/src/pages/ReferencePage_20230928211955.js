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
              <Card.Title>{item}</Card.Title>
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
