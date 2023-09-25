import React, { useState, useEffect } from "react";

const DetailsListPage = () => {
  const [items, setItem] = useState();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const response = fetch("https://www.dnd5eapi.co/api/spells");
    const data = response.json();
    setItem(data.results);
  };
  return (
    <div>
      <h1>DetailsListPage</h1>
      {items.map((item) => {
        return <h2>{item.name}</h2>;
      })}
    </div>
  );
};

export default DetailsListPage;
