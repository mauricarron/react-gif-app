import PropTypes from "prop-types";
const GridItem = ({ url }) => {
  return (
    <li className="card animate__animated animate__fadeIn">
      <img src={url}></img>
    </li>
  );
};

GridItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GridItem;
