import { useState } from "react";
import PropTypes from "prop-types";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["my dress up darling"]);

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category, i) => (
          <GifGrid category={category} key={`${i}-${category}`} />
        ))}
      </ol>
    </>
  );
};

GifApp.propTypes = {};

export default GifApp;
