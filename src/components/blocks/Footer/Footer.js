import React from 'react';
import { svgImages } from '../../../img';
import { Link } from 'react-scroll';

// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="App-footer">
      <section className="Footer">
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
      </section>
    </footer>
  );
}

export default Footer;
