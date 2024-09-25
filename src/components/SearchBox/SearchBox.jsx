import PropTypes from "prop-types";

function SearchBox({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={onSearchChange}
      placeholder="Search contacts..."
    />
  );
}

SearchBox.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.string.isRequired,
};

export default SearchBox;
