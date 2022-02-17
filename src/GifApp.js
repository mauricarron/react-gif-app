import { useState } from "react";
import PropTypes from "prop-types";
import AddCategory from "./components/AddCategory";

const GifApp = () => {
  const [categories, setCategories] = useState([
    "my dress up darling",
    "attack on titan",
    "dragon slayer",
  ]);

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category, i) => (
          <li key={`${i}-${category}`}>{category}</li>
        ))}
      </ol>
    </>
  );
};

GifApp.propTypes = {};

export default GifApp;
