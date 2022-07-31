import React from 'react';
import { MenuComponents } from './components';
// import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <ul className="Menu">
        <MenuComponents.LeftComponents />
        <MenuComponents.RightComponents />
      </ul>
    </header>
  );
}

export default Header;
