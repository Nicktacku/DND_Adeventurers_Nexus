import React, { useState, useEffect } from "react";

const OptionsListPages = () => {
  const [items, setItem] = useState();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await fetch("https://www.dnd5eapi.co/api");
    const data = await response.json();
    console.log(Object.keys(data));
    setItem(data);
  };
  return (
    <div>
      OptionsListPages
      {Object.keys(items).map((item) => {
        return <h2>{item}</h2>;
      })}
    </div>
  );
};

export default OptionsListPages;
