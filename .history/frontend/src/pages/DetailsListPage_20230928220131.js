import React, { useState, useEffect } from "react";
import { useParams, useLocation, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const DetailsListPage = () => {
  //   const [items, setItem] = useState();
  const { title } = useParams();
  const items = useLoaderData();

  console.log(items.results);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <h1>DetailsListPage - {title}</h1>
      {items.results.map((item) => {
        return <h2>{item.name}</h2>;
      })}
    </div>
  );
};

export const DetailsLoader = async (path) => {
  const response = await fetch(`https://www.dnd5eapi.co/api/${path}`);

  return await response.json();
};
