import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import{ FaRocket } from 'react-icons/fa';

import Auth from '../utils/auth';

const AppNavbar = () => {


  return (
    <>
      <Navbar expand='lg' className='navbar'>
        <Container fluid>
          <Navbar.Brand>
            <h1>Dev Team <FaRocket /></h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/manualform' className='navLink'>
                    Create a Team Manually
                  </Nav.Link>
                  <Nav.Link as={Link} to='/random' className='navLink'>
                    Create a Team by Random
                  </Nav.Link>
                  <Nav.Link as={Link} to='/getusers' className='navLink'>
                    List of all users: PLEASE open the CONSOLE
                  </Nav.Link>
                  <Nav.Link as={Link} to='/createrandom' className='navLink'>
                    Random Team From API Or Extra
                  </Nav.Link>
                  <Nav.Link as={Link} to='/createallkindteams' className='navLink'>
                    Create All Kinds of Teams
                  </Nav.Link>
                  <Nav.Link as={Link} to='/' className='navLink'>
                    Search For Users
                  </Nav.Link>
                  <Nav.Link as={Link} to='/profile' className='navLink'>
                    View Your Profile
                  </Nav.Link>
                  <Nav.Link as={Link} to='/project' className='navLink'>
                    View Your Project(s)
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
                
              ) : (
                <>
                  <Nav.Link as={Link} to='/' className='navLink'>Login</Nav.Link>
                  <Nav.Link as={Link} to='/signup' className='navLink'>Sign Up</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
