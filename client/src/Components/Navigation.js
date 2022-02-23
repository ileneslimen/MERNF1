import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { get_contacts, toggle_false } from "../redux/actions/contactActions";
function Navigation() {
  const dispatch = useDispatch();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>MERN APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              onClick={() => dispatch(get_contacts())}
              to="/list"
            >
              Contacts
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/add"
              onClick={() => dispatch(toggle_false())}
            >
              Add a new contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
