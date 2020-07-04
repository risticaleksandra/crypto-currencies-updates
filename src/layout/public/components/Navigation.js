import React from "react";
import {
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        <Button variant="outline-success">Login</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
