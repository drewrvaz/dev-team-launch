import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import{ FaRocket } from 'react-icons/fa';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Auth from '../utils/auth';
import './Navbar.css';


const AppNavbar = () => {

  return (
    <>
      <Navbar expand='lg' className='navbar'>
        <Container fluid>
        
          <Navbar.Brand className="ml-2 fs-1 fw-bold">
            <span>DevTeam <FaRocket /></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Container className="d-inline-flex  justify-content-end">
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>

                  <Nav className="d-inline-flex">
                  <Nav.Link as={Link} to='/profile' className='nav-links fs-4 fw-bold'> 
                    PROFILE
                  </Nav.Link>
                  <div class="vr"></div>
                  <Nav.Link as={Link} to='/project' className='nav-links fs-4 fw-bold'>
                    PROJECT
                  </Nav.Link>
                  </Nav>
                  
                  
                  
                   {/* <Nav.Link as={Link} to='/manualform' className='navLink'>
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
                  </Nav.Link> */}
                </>
                
              ) : (
                <>

                </>
              )}
            </Container>
            <Container className="d-inline-flex  justify-content-end">
            {Auth.loggedIn() ? (
                <>
                  
                  <Nav.Link onClick={Auth.logout} className='fw-bold fs-5 bg-black text-white p-2 border rounded border-dark'>Logout</Nav.Link>
                </>
                
              ) : (
                <>
                  <Nav.Link as={Link} to='/' className='loginBtn fw-bold fs-4 p-2 border rounded border-dark m-2'>Login</Nav.Link>
                  <Nav.Link as={Link} to='/signup' className='signUpBtn fw-bold fs-4 p-2 border rounded border-dark m-2'>Sign Up</Nav.Link>
                </>
              )}
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
