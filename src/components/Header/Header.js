import React, { Fragment } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MSNS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Home</Nav.Link>
                            <Nav.Link href="#deets">Service</Nav.Link>
                            <Nav.Link href="#deets">Courses</Nav.Link>
                            <Nav.Link href="#deets">Contact</Nav.Link>
                            <Nav.Link href="#deets">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Header;