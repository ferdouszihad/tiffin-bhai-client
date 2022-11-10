import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(alert("Log-Out Successfull"))
      .catch((error) => {
        alert("LogOut Unsuccessfull");
      });
  };

  return (
    <div id="header" className="fixed-top ">
      {user && user.uid ? (
        <p className="bg-dark py-1 text-light m-0 text-center">
          🎉 Welcome,
          {user.displayName ? user.displayName : user.email}
        </p>
      ) : (
        ""
      )}
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">Tiffin Bhai</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="home">home</Link>
              <Link to="services">services</Link>
              <Link to="blog">blogs</Link>

              {user && user.uid ? (
                <>
                  <Link to="addService">Add services</Link>
                  <Link to="user-review">My Reviews</Link>
                  <Link onClick={handleLogOut}>signOut</Link>
                  <div className="user-info d-flex  justify-content-center align-items-end">
                    <div className="user-img">
                      <img
                        src={
                          user.photoURL
                            ? user.photoURL
                            : "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/2-Boy-256.png"
                        }
                        alt=""
                        width="50px"
                        className="ms-2 rounded-circle border border-3 border-primary"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link to="login">login</Link>
                  <Link to="register">register</Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
