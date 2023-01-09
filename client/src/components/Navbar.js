import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import{ FaRocket } from 'react-icons/fa';

import Auth from '../utils/auth';
import './Navbar.css';


const AppNavbar = () => {

  return (
    <>
      <Navbar expand='lg' className='navbar'>
        <Container fluid>
        
          <Navbar.Brand className="ml-2 fs-3 fw-bold">
            <span><h1>DevTeam <FaRocket /></h1></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Col className="col-10 d-flex justify-content-center">
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  {/* <div class="vr"></div> */}
                  <Nav>
                  <Nav.Link as={Link} to='/profile' className='nav-links fs-5 fw-bold'> 
                    PROFILE 
                  </Nav.Link>
                  <Nav.Link as={Link} to='/launchprojects' className='nav-links fs-5 fw-bold'>
                    LAUNCH PROJECTS
                  </Nav.Link> 
                  <Nav.Link as={Link} to='/viewprojects' className='nav-links fs-5 fw-bold'>
                    VIEW PROJECTS 
                  </Nav.Link>
                  <Nav.Link as={Link} to='/tools' className='nav-links fs-5 fw-bold'>
                    TOOLS
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
            </Col>
            <Col className="d-inline-flex justify-content-end">
            {Auth.loggedIn() ? (
                <>
                  
                  <Nav.Link onClick={Auth.logout} className='navbarBtn fw-bold fs-7 p-2 border rounded border-dark'>Logout</Nav.Link>
                </>
                
              ) : (
                <>
                  <Nav.Link as={Link} to='/' className='navbarBtn d-flex justify-content-center fw-bold fs-7 p-1 border rounded border-dark m-1' style={{minWidth:"80px"}}>Login</Nav.Link>
                  <Nav.Link as={Link} to='/signup' className='navbarBtn d-flex justify-content-center fw-bold fs-7 p-1 border rounded border-dark m-1' style={{minWidth:"80px"}}>Sign Up</Nav.Link>
                </>
              )}
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;