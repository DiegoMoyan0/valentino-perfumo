import React from 'react';
import '../static/css/home.css'
import { Navbar, Container, Button  } from 'react-bootstrap';
import Logo from '../logo.png';

const NavBar = () => {
  return (
    <Navbar className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="45"
            height="45"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        <a href="#contact" className="custom-button">
  Trabaja conmigo
</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
