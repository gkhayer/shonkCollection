import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return <>

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>;
};

export default Header;
