import React from 'react';
import { Link } from 'react-router-dom';
import { svgImages } from '../../../../img';

function Left() {
  return (
    <li className="Logo">
      <Link to="/">
        <img src={svgImages.Logo} alt="" />
      </Link>
    </li>
  );
}

export default Left;
