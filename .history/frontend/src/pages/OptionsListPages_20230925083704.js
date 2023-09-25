import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OptionsListPages = ({ items }) => {
  return (
    <div>
      <h1>OptionsListPages</h1>
      {Object.keys(items).map((item) => {
        return (
          <Link to={`/${item}`} state={items[item]}}>
            <h2>{item}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default OptionsListPages;
