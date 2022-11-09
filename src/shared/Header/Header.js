import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div id="header" className="fixed-top ">
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">Tiffin Bhai</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="home">home</Link>
              <Link to="services">services</Link>
              <Link to="about">about</Link>
              <Link to="Reviews">Reviews</Link>
              <Link to="login">login</Link>
              <Link to="signup">signup</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
