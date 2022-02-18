import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import GridItem from "./GridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(setImages);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="gif-grid">
        {images.map((i) => (
          <GridItem {...i} key={i.id} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {};

export default GifGrid;
