import React, { useState } from "react";
import "./Buttons.scss";
import SearchBar from "../SearchBar/SearchBar";
// Define the props interface
interface ButtonsInterface {
  searchMenu: boolean;
  setSearchMenu: React.Dispatch<React.SetStateAction<boolean>>;
  searchButtonSpan: string;
  mainMenu: boolean;
  setMainMenu: React.Dispatch<React.SetStateAction<boolean>>;
  mainButtonSpan: string;
}

// Functional component
const Buttons = ({
  searchMenu,
  setSearchMenu,
  searchButtonSpan,
  mainMenu,
  setMainMenu,
  mainButtonSpan,
}: ButtonsInterface) => {
  if (searchMenu) {
    searchButtonSpan = "CLOSE";
    mainButtonSpan = "MENU";
  }
  if (mainMenu) {
    mainButtonSpan = "CLOSE";
    searchButtonSpan = "SEARCH";
  }
  return (
    <div className="buttonsDiv">
      <button
        className="searchButton topButton"
        type="submit"
        onClick={() => {
          setSearchMenu(!searchMenu);
          setMainMenu(false);
        }}
        style={
          searchMenu || mainMenu
            ? { border: "solid 1px rgb(49, 49, 49)", color: "grey" }
            : {}
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="32"
          height="32"
          viewBox="0,0,240,240"
        >
          <g fill="#ababab">
            <g transform="scale(3.55556,3.55556)">
              <path d="M31,11c-11.027,0 -20,8.973 -20,20c0,11.027 8.973,20 20,20c3.97417,0 7.67238,-1.17843 10.78906,-3.18555l12.9375,12.9375c1.664,1.664 4.36239,1.664 6.02539,0c1.664,-1.664 1.664,-4.36139 0,-6.02539l-12.9375,-12.9375c2.00712,-3.11668 3.18555,-6.8149 3.18555,-10.78906c0,-11.027 -8.973,-20 -20,-20zM31,19c6.616,0 12,5.384 12,12c0,6.616 -5.384,12 -12,12c-6.616,0 -12,-5.384 -12,-12c0,-6.616 5.384,-12 12,-12z"></path>
            </g>
          </g>
        </svg>{" "}
        <span>{searchButtonSpan}</span>
      </button>

      {searchMenu ? (
        <>
          <SearchBar></SearchBar>
          <button className="type filterButton">SOUND</button>
          <button className="category filterButton">CATEGORY</button>
          <button className="theme filterButton">THEME</button>
        </>
      ) : (
        ""
      )}

      {mainMenu ? (
        <>
          <button className="optionButton">TIMELINE</button>
          <button className="optionButton">RESET</button>
          <button className="optionButton">LOOP</button>
        </>
      ) : (
        ""
      )}

      <button
        className="menuButton topButton"
        type="submit"
        onClick={() => {
          setMainMenu(!mainMenu);
          setSearchMenu(false);
        }}
        style={
          mainMenu || searchMenu
            ? { border: "solid 1px rgb(49, 49, 49)", color: "grey" }
            : {}
        }
      >
        <span>{mainButtonSpan}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="32"
          height="32"
          viewBox="0,0,256,256"
        >
          <g fill="#ababab">
            <g transform="scale(3.55556,3.55556)">
              <path d="M56,48c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,32c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,16c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0z"></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};

// Define styles as an example

export default Buttons;
