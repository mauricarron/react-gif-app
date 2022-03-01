import PropTypes from "prop-types";
const GridItem = ({ title, url }) => {
  return (
    <li className="card animate__animated animate__fadeIn">
      <img src={url} alt={title}></img>
    </li>
  );
};

GridItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GridItem;
