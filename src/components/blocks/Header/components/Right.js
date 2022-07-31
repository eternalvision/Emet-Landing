import React from 'react';
import { Link } from 'react-scroll';
import Button from './Button';

function Menu() {
  return (
    <li className="Menu-list">
      <ul>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            що це
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="forwhom"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            для кого
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="example"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            приклад
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="areasofuse"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            області застосування
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="benefits"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            переваги
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="capabilities"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            можливості
          </Link>
        </li>
        <li>
          <Button />
        </li>
      </ul>
    </li>
  );
}

export default Menu;
