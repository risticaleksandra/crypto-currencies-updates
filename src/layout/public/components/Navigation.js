import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { setLoginFlag, isLoggedIn } from "../../../web_services/login_services";

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const hanldeUserLogIn = () => {
    setLoginFlag(true);
    setLoggedIn(true);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav.Link href="/home">Home</Nav.Link>
          {loggedIn ? <Nav.Link href="/profile">Profile</Nav.Link> : null}
        </Nav>
        <Button variant="primary" onClick={() => hanldeUserLogIn()}>
          Login
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
