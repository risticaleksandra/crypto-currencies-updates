import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { setLoginFlag, isLoggedIn } from "../../../web_services/login_services";
import { useHistory } from "react-router";

const Navigation = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [homeLinkActive, setHomeLinkActive] = useState(true);
  const [profileLinkActive, setProfileLinkActive] = useState(false);

  useEffect(() => {
    history.location.pathname === "/home"
      ? setActiveLink(true, false)
      : setActiveLink(false, true);
  }, [history]);

  const hanldeUserLogIn = () => {
    setLoginFlag(true);
    setLoggedIn(true);
  };

  const setActiveLink = (homeLinkActive, profileLinkActive) => {
    console.log(homeLinkActive, profileLinkActive);
    setHomeLinkActive(homeLinkActive);
    setProfileLinkActive(profileLinkActive);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav.Link active={homeLinkActive} href="/home">
            Home
          </Nav.Link>
          {loggedIn ? (
            <Nav.Link active={profileLinkActive} href="/profile">
              Profile
            </Nav.Link>
          ) : null}
        </Nav>
        <Button variant="primary" onClick={() => hanldeUserLogIn()}>
          Login
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
