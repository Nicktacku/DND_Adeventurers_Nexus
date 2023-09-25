import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const DetailsListPage = () => {
  const [items, setItem] = useState();
  const { title } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    getItem();
  }, [state]);

  const getItem = async () => {
    const response = await fetch(`https://www.dnd5eapi.co${state}`);
    const data = await response.json();
    console.log(state);
    console.log(data.results);
    setItem(data.results);
  };
  return (
    <div>
      <h1>DetailsListPage - {title}</h1>
      {items.map((item) => {
        return <h2>{item.name}</h2>;
      })}
    </div>
  );
};

export default DetailsListPage;
