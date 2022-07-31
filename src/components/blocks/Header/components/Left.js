import React from 'react';
import { Link } from 'react-scroll';

import { svgImages } from '../../../../img';

function Left() {
  return (
    <li className="Logo">
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img src={svgImages.Logo} alt="" />
      </Link>
    </li>
  );
}

export default Left;
