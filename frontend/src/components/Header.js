import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Container, Navbar, Nav, NavDropdown, Form, Button, InputGroup} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { logout } from '../actions/userActions';

const Header = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Eventra</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <div className="input-group">
                <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                <Form.Control
                type="search"
                placeholder="Search events"
                className="me-2"
                aria-label="Search"
                />
              </div>
              <div className="input-group">
                <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-location-dot"></i></InputGroup.Text>
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
            <LinkContainer to="/cart">
              <Nav.Link><i className='fas-fa-cart-plus'></i> Cart</Nav.Link>
            </LinkContainer>
            {userInfo? (
              <NavDropdown title={userInfo.name} id='userName'>
                <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}> Logout</NavDropdown.Item>
              </NavDropdown>
            ): (<LinkContainer to="/login">
              <Nav.Link><i className='fas-fa-user'></i> Sign In</Nav.Link>
              </LinkContainer>)}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </header>
  )
}

export default Header