import "./App.scss";

import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Main from "./Components/Main/Main";
import Controls from "./Components/Controls/Controls";
import Buttons from "./Components/Buttons/Buttons";
import SearchResults from "./Components/SearchResults/SearchResults";
import SearchInfos from "./Components/SearchInfos/SearchInfos";
import { useState } from "react";

function App() {
  const [searchMenu, setSearchMenu] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);
  console.log("searchMenu : " + searchMenu);
  console.log("mainMenu : " + mainMenu);
  return (
    <>
      <Header title="Froggus"></Header>
      <Buttons
        searchMenu={searchMenu}
        setSearchMenu={setSearchMenu}
        searchButtonSpan="SEARCH"
        mainMenu={mainMenu}
        setMainMenu={setMainMenu}
        mainButtonSpan="MENU"
      ></Buttons>
      {searchMenu ? (
        <>
          <SearchInfos></SearchInfos>
          <SearchResults></SearchResults>
        </>
      ) : (
        <>
          <div className="app">
            <Main></Main>
          </div>
        </>
      )}
    </>
  );
}

export default App;
