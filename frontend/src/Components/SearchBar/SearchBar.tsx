import React from "react";
import "./SearchBar.scss";
// Define the props interface

// Functional component
const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <input type="text" placeholder="" />
      </div>
      <button className="sendButton">
        <img src="/public/icons/icons8-send-48.png" alt="" />
      </button>
    </div>
  );
};

// Define styles as an example

export default SearchBar;
