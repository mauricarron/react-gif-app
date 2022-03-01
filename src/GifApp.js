import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["kimetsu no yaiba"]);

  return (
    <>
      <div className="search-bar">
        <h1>.gifAPP</h1>
        <AddCategory setCategories={setCategories} />
      </div>
      <div>
        {categories.map((category, i) => (
          <GifGrid category={category} key={`${i}-${category}`} />
        ))}
      </div>
    </>
  );
};

export default GifApp;
