import React from "react";

const GridItem = ({ title, url }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url}></img>
    </div>
  );
};

export default GridItem;
