import React, { useState, useEffect } from "react";

const DetailsListPage = () => {
  const [items, setItem] = useState();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const response = fetch("https://www.dnd5eapi.co/api/spells");
    const items = response.json();
    setItem(items);
  };
  return (
    <div>
      <h1>DetailsListPage</h1>
      <h2>{items.results.map()}</h2>
    </div>
  );
};

export default DetailsListPage;
