import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <h1>OptionsListPages</h1>
      {/* {Object.keys(items).map((item) => {
        return (
          <Link to={`/${items.item}`}>
            <h2>{item}</h2>
          </Link>
        );
      })} */}
    </div>
  );
};

export default OptionsListPages;
