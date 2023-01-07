import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Select from 'react-select';
import Table from 'react-bootstrap/Table';
import { shuffle } from "./Random/helper";
import "./Random/randomStyle.css";

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import {useState} from 'react';
import { GET_USER } from '../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, 
         faAnchor, 
        faRobot,
        faStarAndCrescent,
        } from '@fortawesome/free-solid-svg-icons';
 
import HumanListInput from "./Random/HumanListInput";
import RandomHumanPicker from "./Random/RandomHumanPicker";
import TeamGenerator from "./Random/TeamGenerator";

        //Placeholder need to query projects
const optionsProjects = [
    { value: 'None', label: 'None' },
    { value: 'Project 1', label: 'Project 1' },
    { value: 'Project 2', label: 'Project 2' },
    { value: 'Project 3', label: 'Project 3' },
  ]

const divStyle = {
    maxWidth: '500px',
    fontFamily: 'Arial',
    color: 'var(--green)',
  };
  

const Miscellaneous= () =>  {

    const [isRandomHumanPickerShown, setIsRandomHumanPickerShown] = useState(true);
    const [isAvatarShown, setIsAvatarShown] = useState(false);
    const [isInvitesShown, setIsInvitesShown] = useState(false);
    
    const [isMiscModalShown, setIsMiscModalShown] = useState(false);

    const onChange = (event) => {
  
        console.log(event.value)
    
        if (event.value === 'invites') {
    
          setIsRandomHumanPickerShown(false);
          setIsAvatarShown(false);
          setIsInvitesShown(true);
          return true;
        }
        else if (event.value === 'avatar') {
            setIsRandomHumanPickerShown(false);
            setIsAvatarShown(true);
            setIsInvitesShown(false);
            return true;
          }
          else if (event.value === 'manual') {
            setIsRandomHumanPickerShown(true);
            setIsAvatarShown(false);
            setIsInvitesShown(false);
      
            return true;
          }
          else {
            setIsRandomHumanPickerShown(false);
            setIsAvatarShown(false);
            setIsInvitesShown(false);
      
            return false;
          }
    

  };

  const displayRandomHumanPicker = event => {
    // 👇️ toggle visibility
    setIsRandomHumanPickerShown(true);
    setIsAvatarShown(false);
    setIsInvitesShown(false);
  };
  const displayAvatar = event => {
    // 👇️ toggle visibility
    setIsRandomHumanPickerShown(false);
    setIsAvatarShown(true);
    setIsInvitesShown(false);
  };
  const displayInvites = event => {
    // 👇️ toggle visibility
    setIsRandomHumanPickerShown(false);
    setIsAvatarShown(false);
    setIsInvitesShown(true);
  };
  const displayMiscModal = event => {
    // 👇️ toggle visibility
    setIsMiscModalShown(true);
  };

  const closeMiscModal = event => {
    // 👇️ toggle visibility
    setIsMiscModalShown(false);
  };

  


  return (

    <Container style={{color: 'var(--green)'}}>
         <Modal.Dialog   style={{display: isMiscModalShown ?  'block' : 'none'}}>
      <Modal.Header closeButton onClick={closeMiscModal}></Modal.Header>
      </Modal.Dialog>

    <Row className='ProjLinksContainer'>
    <Breadcrumb className="d-flex justify-content-center">
      <Breadcrumb.Item onClick={displayRandomHumanPicker}>
        Pick Person Randomly
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayAvatar}>
        Avatar
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayInvites}>
        Invites
      </Breadcrumb.Item> 
      </Breadcrumb>
    </Row>

<Row  className="justify-content-center"  style={{display: isInvitesShown ?  'block' : 'none'}}>    
<Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
<Form>
<div className="justify-content-center fs-3 fw-italic">Invites</div>
  <Table striped bordered hover size="sm">
<thead>
  <tr>
    <th>#</th>
    <th style={{color: 'var(--green)'}}>Project Invites</th>
    <th></th>
  </tr>
</thead>
<tbody >
  <tr>
    <td>1</td>
    <td>Project 1</td>
    <td><Button variant="success" size="sm">Accept</Button><Button variant="danger" size="sm">Decline</Button></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Project 2</td>
    <td><Button variant="success" size="sm">Accept</Button><Button variant="danger" size="sm">Decline</Button></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Project 3</td>
    <td><Button variant="success" size="sm">Accept</Button><Button variant="danger" size="sm">Decline</Button></td>
  </tr>
  <tr>
    <td>4</td>
    <td>Project 4</td>
    <td><Button variant="success" size="sm">Accept</Button><Button variant="danger" size="sm">Decline</Button></td>
  </tr>
  <tr>
    <td>5</td>
    <td>Project 5</td>
    <td><Button variant="success" size="sm">Accept</Button><Button variant="danger" size="sm">Decline</Button></td>
  </tr>
  <tr>
    <td>6</td>
    <td>Project 6</td>
    <td><Button variant="success" size="sm">Accept</Button><Button variant="danger" size="sm">Decline</Button></td>
  </tr>
</tbody>
</Table>
  
</Form>
</Container>
</Row>


<Row className="justify-content-center"  style={{display: isAvatarShown ?  'block' : 'none'}}>
      <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
        <Form>
          <div className="justify-content-center fs-3 fw-italic">Manage Avatar</div>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Select Project</Form.Label>
            <Select options={optionsProjects} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Assign Avatar</Form.Label>
            <Container fluid className="d-flex inline p-0">
              <Col className='col-10'>
                <Form.Control type="Text" placeholder="Enter Project" />
              </Col>
              <Col>
                <Button className='searchBtn' type="submit">
                  Search
                </Button>           
              </Col>
            </Container>          
          </Form.Group>
          <Table striped bordered hover size="sm" style={{maxHeight:'10px',overflow:'auto'}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td>1</td>
                <td><FontAwesomeIcon icon={faAnchor} color="black" /> Anchor Icon</td>
                <td><Button variant="success" size="sm">Add Avatar</Button><Button variant="danger" size="sm">Remove</Button></td>
              </tr>
              <tr>
                <td>2</td>
                <td><FontAwesomeIcon icon={faRobot} color="grey"/> Robot Icon</td>
                <td><Button variant="success" size="sm">Add Avatar</Button><Button variant="danger" size="sm">Remove</Button></td>
              </tr>
              <tr>
                <td>3</td>
                <td><FontAwesomeIcon icon={faStarAndCrescent} />Star and Crescent</td>
                <td><Button variant="success" size="sm">Add Avatar</Button><Button variant="danger" size="sm">Remove</Button></td>
              </tr>
            </tbody>
          </Table>        
          <Container className="d-flex justify-content-center mt-4">
            <Button className='submitBtn' type="submit">
              Save Avatar
            </Button>
            </Container>
        </Form>
        </Container>
    </Row>

    <Row className="justify-content-center"  style={{display: isRandomHumanPickerShown ?  'block' : 'none'}}>  
   <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
    <Form>
   <div className="justify-content-center fs-3 fw-italic">Under Construction</div>
   </Form>
  </Container>
  </Row>
</Container>

  );

}
export default Miscellaneous;