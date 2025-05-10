import React from 'react';
import logo from '../assets/oahse-logo.png';
import { Navbar, Container } from 'react-bootstrap';

function Header({ setCurrentComponent }) {
  return (
    <div style={{ width: "100%" }}>
      <Navbar className="" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="oahse Logo" width="120px" />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text
              style={{ cursor: "pointer", color: "#0d6efd" }} // Make it look clickable
              onClick={() => setCurrentComponent("AccessStep")} // Correctly set the component to "AccessStep"
            >
              Sign in
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;