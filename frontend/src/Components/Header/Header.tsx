import React from "react";
import "./Header.scss";
// Define the props interface
interface HeaderInterface {
  title: string; // Title of the header
}

// Functional component
const Header = ({ title }: HeaderInterface) => {
  return (
    <header className="header">
      <div>
        <a className="title" href="">
          {title}
        </a>
      </div>
      <div className="headerMenu">
        <ul>
          <li>
            <a href="">Tutorial</a>
          </li>
          <li>
            <a href="">Connection</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

// Define styles as an example

export default Header;
