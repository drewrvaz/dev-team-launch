import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Dropdown,  DropdownButton} from 'react-bootstrap';  
import { useMutation } from '@apollo/client';

const InstructorDashboard = () =>{ 
    
    
return (
    <div className="InstructorDashboard"> 
    <Container className='p-4'>  
        <DropdownButton size='lg' variant="success" id="dropdown-basic-button" title="Dropdown button">  
            <Dropdown.Item href="#/action-1">Create classes</Dropdown.Item>  
            <Dropdown.Item href="#/action-2">Create teams</Dropdown.Item>  
            <Dropdown.Item href="#/action-3">Invite students to teams</Dropdown.Item>  
            <Dropdown.Item href="#/action-4">Select avatar</Dropdown.Item> 
        </DropdownButton>
    </Container>  
    </div>  
);
}
export default InstructorDashboard; 
