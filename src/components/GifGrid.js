import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getGifs } from "../helpers/getGifs";
import { useFetchGif } from "../hooks/useFetchGif";
import GridItem from "./GridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGif(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="gif-grid">
        {loading
          ? "buscando gifs"
          : data.map((d) => <GridItem {...d} key={d.id} />)}
      </div>
    </>
  );
};

GifGrid.propTypes = {};

export default GifGrid;
