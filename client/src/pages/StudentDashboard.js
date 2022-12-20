import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container, Dropdown,  DropdownButton, DropdownItem} from 'react-bootstrap';  
import { useMutation } from '@apollo/client';
import {CHANGE_SKILLS, CHANGE_AVAILABILITY, CHANGE_EXPERIENCE, CHANGE_PASSWORD, CHANGE_AVATAR } from '../utils/mutations';
import Auth from '../utils/auth';
import { searchUserProfile } from '../utils/API';
const StudentDashboard = () => { 
const [Dash, setDash] = useState([]);  

viewProfile() {
  const onClick = async (event) => {
    event.preventDefault();
    }

    try {
      const response = await searchUserProfile(_id);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { data } = await response.json();

      const userProfile = data.map((_id) => ({
        userName: username,
        email: email,
        skills: skills || '',
        availability: availability || '',
        experience: experience || '',
        avatar: avatar || '',
        invites: invites || '',
      }));

    } catch (err) {
      console.error(err);
    }
  };
  

    
return (
    <div className="Dashboard"> 
    <Container className='p-4'>  
        <DropdownButton size='lg' variant="success" id="dropdown-basic-button" title="Dropdown button">  
            <Dropdown.Item as="button" onClick={viewProfile()}>View profile</Dropdown.Item>
            <Dropdown.Item as="button" onClick={viewClasses()}>View classes</Dropdown.Item>  
            <Dropdown.Item as="button" onClick={viewTeams()} >View teams</Dropdown.Item>  
            <Dropdown.Item as="button" onClick={viewInvites()} >View invites</Dropdown.Item> 
            <Dropdown.Item >Edit profile</Dropdown.Item>
              <DropdownButton size='md' variant="success" id="dropdown-basic-button" title="Dropdown button"> 
                <Dropdown.Item as="button" onClick={changeSkills()}>Change skills</Dropdown.Item>  
                <Dropdown.Item as="button" onClick={changeAvailability()}>Change availability</Dropdown.Item>  
                <Dropdown.Item as="button" onClick={changeExperience()} >Change experience</Dropdown.Item> 
                <Dropdown.Item as="button" onClick={changePassword()}>Change password</Dropdown.Item>
                <Dropdown.Item as="button" onClick={changeAvatar()}>Change avatar</Dropdown.Item>    
              </DropdownButton>   
        </DropdownButton>
    </Container> 
    </div> 
);
}
export default StudentDashboard; 
