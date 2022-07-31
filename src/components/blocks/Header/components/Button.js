import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

function Button() {
  return (
    <Link
      to="details"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="Menu-button"
    >
      замовити послугу
    </Link>
  );
}

export default Button;
