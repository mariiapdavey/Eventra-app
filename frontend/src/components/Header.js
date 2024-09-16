import React from 'react';
import {Container, Navbar, Nav, Form, Button, InputGroup} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/" color='red'>Eventra</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <div class="input-group">
                <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                <Form.Control
                type="search"
                placeholder="Search events"
                className="me-2"
                aria-label="Search"
                />
              </div>
              <div class="input-group">
                <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-location-dot"></i></InputGroup.Text>
                <Form.Control
                type="search"
                placeholder="Choose a location"
                className="me-2"
                aria-label="Search"
                />
            </div>
              <Button variant="outline-success">Search</Button>
            </Form>
          <Nav
            className="ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/findevents">Find Events</Nav.Link>
            <Nav.Link href="/login"><i className="fas fa-user"></i>Sign In</Nav.Link>  
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </header>
  )
}

export default Header