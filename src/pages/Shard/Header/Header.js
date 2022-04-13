import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firbase.int';
import logo from '../../../images/logo.png'

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSingOut = ()=>{
    signOut(auth)
  }
    return (
        <header>
           <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
    <img height={30} src={logo} alt="" />

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#services">Servicse</Nav.Link>
      <Nav.Link href="home#exparts">Exparts</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      {user ?
      <Button variant="link text-white text-decoration-none"onClick={handleSingOut}>Sing Out</Button>
      :
        <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    );
};

export default Header;