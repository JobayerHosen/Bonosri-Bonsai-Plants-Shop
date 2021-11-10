import React from "react";
import { Container, Nav, Button, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../../../../assets/logo.png";

const Navigation = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg">
          <NavLink to="/">
            <img className="logo" src={logo} alt="" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/explore" className="nav-link">
                Explore
              </NavLink>
            </Nav>
            <Button variant="outline-secondary" className="fw-bold">
              Login
            </Button>
            <Button variant="success" className="fw-bold btn-green ms-2">
              Register
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Navigation;
