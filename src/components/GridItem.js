import React from "react";

const GridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <p>{title}</p>
      <img src={url}></img>
    </div>
  );
};

export default GridItem;
