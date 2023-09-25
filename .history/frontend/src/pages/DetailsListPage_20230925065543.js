import React, { useState, useEffect } from "react";

const DetailsListPage = () => {
  const [items, setItem] = useState();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await fetch("https://www.dnd5eapi.co/api");
    const data = await response.json();
    console.log(Object.keys(data));
    setItem(Object.keys(data));
  };
  return (
    <div>
      <h1>DetailsListPage</h1>
      {/* {items.map((item) => {
        return <h2>{item.name}</h2>;
      })} */}
      {items.map((item) => {
        return <h2>{item}</h2>;
      })}
    </div>
  );
};

export default DetailsListPage;
