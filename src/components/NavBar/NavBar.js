import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary">
        <Container>
          <h3 className="text-white">Web Learning</h3>
          <Nav className="ms-auto">
            <Link to="/" className="text-white mx-1 text-decoration-none">
              Home
            </Link>
            <Link to="/statistics" className="text-white mx-1 text-decoration-none">
              Statistics
            </Link>
            <Link to="/blogs" className="text-white mx-1 text-decoration-none">
              Blogs
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
