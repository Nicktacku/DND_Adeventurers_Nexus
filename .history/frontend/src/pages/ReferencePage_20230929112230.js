import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


export const ReferencePage = () => {
  const items = useLoaderData();
  const excluded = [
    "backgrounds",
    "equipment-categories",
    "feats",
    "rules",
    "rule-sections",
  ];

  return (
        <div>
          <h1>hello</h1>
          <div className="row">
            
            {Object.keys(items).map((item) => {
              if (!excluded.includes(item)) {
                return (
                  <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                  // <div className="card col-auto m-2 shadow nav-link" style={{ width: "18rem" }}>
                    
                  //       <img src="..." className="card-img-top" alt="..." />
                  //       <div className="card-body">
                  //         <Link to={`/${item}`} state={items[item]} className="card-title nav-link stretched-link">{item}</Link>
                  //       </div>

                  // </div>
                );
              }
            })}
          </div>
        </div>
  );
};

export const ReferenceLoader = async () => {
  const response = await fetch("https://www.dnd5eapi.co/api/");

  return await response.json();
};
