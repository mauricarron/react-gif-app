import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import GridItem from "./GridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getGifs = async () => {
    const API_KEY = "OEv5QuVDiGVqLnDTug5jejwxtApomauL";
    const url =
      "https://api.giphy.com/v1/gifs/search?q=ranma&limit=10&api_key=OEv5QuVDiGVqLnDTug5jejwxtApomauL";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((i) => {
      return {
        id: i.id,
        title: i.title,
        url: i.images.downsized_medium.url,
      };
    });
    setImages(gifs);
  };

  useEffect(() => {
    getGifs();
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
