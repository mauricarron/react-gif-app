import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getGifs } from "../helpers/getGifs";
import { useFetchGif } from "../hooks/useFetchGif";
import GridItem from "./GridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGif(category);

  return (
    <>
      <ul className="gif-grid">
        {loading
          ? "buscando gifs"
          : data.map((d) => <GridItem {...d} key={d.id} />)}
      </ul>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
