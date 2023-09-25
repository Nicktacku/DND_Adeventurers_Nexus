import React, { useState, useEffect } from "react";

const DetailsListPage = () => {
  const [data, setData] = useState();

  const getData = () => {
    const response = fetch("https://www.dnd5eapi.co/api/spells");
    const data = response.json();
    setData(data);
  };
  return <div>DetailsListPage</div>;
};

export default DetailsListPage;
