import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsListPage = () => {
  const [items, setItem] = useState();
  const { title } = useParams();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await fetch("https://www.dnd5eapi.co/api");
    const data = await response.json();
    console.log(data);
    setItem(data);
  };
  return (
    <div>
      <h1>DetailsListPage - {title}</h1>
      {/* {items.map((item) => {
        return <h2>{item.name}</h2>;
      })} */}
    </div>
  );
};

export default DetailsListPage;
