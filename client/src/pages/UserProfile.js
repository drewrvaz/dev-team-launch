
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container , Row, CardGroup, Card, Button, Dropdown, Form } from 'react-bootstrap'; 
import ListGroup  from 'react-bootstrap/ListGroup';
import Auth from '../utils/auth'; 
import { useMutation, useQuery } from '@apollo/client';
import {GET_ME} from '../utils/queriesscm';/import { UPDATE_SKILL, UPDATE_EXPERIENCE, UPDATE_AVAILABILITY, UPDATE_PASSWORD } from '../utils/mutationscm';
import React, { useState, useEffect } from 'react';
import { Select } from 'react-select';
//must add react-select to package.json dependencies

const UserProfile = ()  => { 

  // create state for holding returned data
const [searchedUser, setSearchedUser] = useState([]);
  // create state to hold saved values
const [savedPassword, setSavedPassword] = useMutation(UPDATE_PASSWORD);
const [showPassword, setShowPassword]= React.useState({ password: "", showPassword: false,});

//load user profile from db
try {
const { loading, data} = useQuery(GET_ME);
  if (loading) {
    return <h2>LOADING...</h2>;
  }
 //  const { items } = await response.json();
   const usrData = data.map((user) => ({
     username: user.username,
     skills: user.skills || ['None set'],
     availability: user.availability || ['None set'],
     experience: user.experience || ['None set'],
     password: user.password,
     avatar: user.userAvatarId
     }));
    setSearchedUser(usrData);
    } catch (err) {
    console.error(err);
    }
  };

  

    //check to see if any skills are in db
  if ( user.skills  != null ) {
      const userSkill = user.skills.split(" ", 3);
      const userSkill1 = userSkill[0];
      const userSkill2 = userSkill[1];
      const userSkill3 = userSkill[2];

};
//set skills for dropdown menu
const [savedSkills, setSavedSkills] = useState();
const optionList = [
    {value: "HTML/JavaScript", label:"HTML/JavaScript" },
    {value: "Node/Express", label:"Node/Express" },
    {value: "Databases", label:"Databases" },
     ];

//update user profile for skills
function handleSelect(data) {
  e.prevent.default();
  setSavedSkills(data) = useMutation(UPDATE_SKILL);
  const dropDown = document.getElementById("dropdown-skill");  
        dropDown.selectedIndex = 0;  
  
   }

//availability dropdown
const [savedAvailability, setSavedAvailability] = useState();
const optionListA = [
    {value: "low", label:"low" },
    {value: "medium", label:"medium" },
    {value: "high", label:"high" },
     ];
    function handleSelectAvailability(data) {
      e.prevent.default();
      setSavedAvailability(data) = useMutation(UPDATE_AVAILABILITY);
      }

//experience dropdown
const [savedExperience, setSavedExperience] = useState();
const optionListE = [
    {value: "low", label:"low" },
    {value: "medium", label:"medium" },
    {value: "high", label:"high" },
     ];
    function handleSelectExperience(data) {
      e.prevent.default();
      setSavedExperience(data)= useMutation(UPDATE_EXPERIENCE);
      }

  return (  
    <div className="UserProfile">  
    <h2 style={{textAlign: "center", color: "#00a5e0", marginBottom: "5px"}}>My Profile</h2> 
    <Container fluid className = "align-items-center" style={{background: "gray", height: "90vh", alignContent: "center"}}> 
    <Row>
      <CardGroup>
      <Card  className="border rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px", margin: "5px"}}>
        <Card.Title className="mb-0 text-center">Skills</Card.Title>
        <Card.Body className="mb-0">
            <ListGroup>
           <ListGroup.Item> {userSkill1}  </ListGroup.Item>
            <ListGroup.Item>  {userSkill2}   </ListGroup.Item>
            <ListGroup.Item> {userSkill3}   </ListGroup.Item>   
          </ListGroup>
          </Card.Body>
          <Card.Footer>
            <div className="dropdown-container" style={{width: "10rem", height: "8rem"}}>
                <Select id="dropdown-skill"
                   placeholder="Update"
                   options={optionListA}
                   value={selectedOption}
                   onChange={handleSelectAvail}     
                     isMulti                     
             />
             </div>
          </Card.Footer>
        </Card>
  
        <Card className="border  rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px", margin: "5px"}}>
          <Card.Title className="mb-0 text-center">Experience</Card.Title>
          <Card.Body className="mb-0">
          <  ListGroup>
            <ListGroup.Item> { user.experience } </ListGroup.Item>
            </  ListGroup>
          </Card.Body>
          <Card.Footer> <div className="dropdown-container" style={{width: "10rem", height: "8rem"}}>
                <Select
                   placeholder="Update"
                   options={optionListE}
                   value={selectedOption}
                   onChange={handleSelectExperience}                        
             />
             </div>
          </Card.Footer>
          </Card>
    
          <Card className="border rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px",  margin: "5px"}}>
            <Card.Title className="mb-0 text-center">Availability</Card.Title>
            <Card.Body className="mb-0">
            <  ListGroup>
            <ListGroup.Item> { user.availability } 
            </ListGroup.Item>
            </  ListGroup>
            </Card.Body>
            <Card.Footer>
             <div className="dropdown-container" style={{width: "10rem", height: "8rem"}}>
                 <form>
                <Select
                   placeholder="Update"
                   options={optionListA}
                   value={selectedOption}
                   onChange={handleSelectAvailability}                        
             /></form></div>
            </Card.Footer>
            </Card>

            <Card className="border rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px",  margin: "5px"}}>
              <Card.Title className="mb-0 text-center">Avatar</Card.Title>
              <Card.Body className="mb-0">
              <  ListGroup>
            <ListGroup.Item> {user.userAvatarId} </ListGroup.Item>
            </  ListGroup>
              </Card.Body>
              <Card.Footer><Button variant="primary" className="btn-xs btn-center">Update</Button></Card.Footer>
              </Card>
            
            <Card className="border rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px",  margin: "5px"}}>
              <Card.Title className="mb-0 text-center">Password</Card.Title>
              <Card.Body className="mb-0">
              <  ListGroup>
              <ListGroup.Item> xxxxxxx  </ListGroup.Item>
              </  ListGroup>
              </Card.Body>
              <Card.Footer><Button variant="primary" className="btn-xs btn-center">Update</Button></Card.Footer>
              </Card>
              </CardGroup>
              </Row>
    </Container>  
    </div>  
  );  
}  
export default UserProfile;  

