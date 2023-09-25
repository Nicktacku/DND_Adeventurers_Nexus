import React, { useState, useEffect } from "react";

const OptionsListPages = () => {
  const [items, setItem] = useState();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await fetch("https://www.dnd5eapi.co/api");
    const data = await response.json();
    console.log(data);
    setItem(data);
  };
  return <div>OptionsListPages</div>;
};

export default OptionsListPages;
