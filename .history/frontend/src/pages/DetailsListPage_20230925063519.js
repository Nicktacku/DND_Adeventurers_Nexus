import React, { useState, useEffect } from "react";

const DetailsListPage = () => {
  const [item, setItem] = useState();

  const getItem = () => {
    const response = fetch("https://www.dnd5eapi.co/api/spells");
    const item = response.json();
    setItem(item);
  };
  return <div>DetailsListPage</div>;
};

export default DetailsListPage;
