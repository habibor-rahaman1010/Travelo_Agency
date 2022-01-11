import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Nav.Link as={NavLink} to="/">Travelo</Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navbar">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/destinations">Destination</Nav.Link>
                        <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={NavLink} to="/popular_places">Popular Places</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>


                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        <Nav.Link as={NavLink} to="/registration">Sign up</Nav.Link>
                        <Button variant='danger'>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;