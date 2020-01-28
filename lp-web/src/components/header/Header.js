import React from "react";
import { Link } from "react-scroll";
import styled from 'styled-components'
import './header.scss';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Header = () => {

  return (
    <div className="header">
      <Button >
        Lexiano Button
      </Button>
      <Link
        href="#"
        className="nav-link"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
      >
        Home
      </Link>
      <Link
        href="#"
        className="nav-link"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
      >
        About
      </Link>
      <Link
        href="#"
        className="nav-link"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
      >
        Contact
      </Link>
  </div>
  );
}

export default Header;