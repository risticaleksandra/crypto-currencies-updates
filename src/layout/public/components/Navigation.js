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
    setHomeLinkActive(homeLinkActive);
    setProfileLinkActive(profileLinkActive);
  };

  return (
    <Navbar bg="darkRed" variant="dark navigationBar" sticky="top">
      <Navbar.Brand className="navText" href="#home">
        <span className="navSpan">C</span>rypto{" "}
        <span className="navSpan">C</span>urrencies{" "}
        <span className="navSpan">U</span>pdates
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link className="navText" active={homeLinkActive} href="/home">
            Home
          </Nav.Link>
          {loggedIn ? (
            <Nav.Link
              className="navText"
              active={profileLinkActive}
              href="/profile"
            >
              Profile
            </Nav.Link>
          ) : null}
        </Nav>
        <Button
          variant="outline-light"
          size="lg"
          onClick={() => hanldeUserLogIn()}
        >
          Login
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
