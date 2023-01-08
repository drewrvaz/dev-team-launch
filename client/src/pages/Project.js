import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

const divStyle = {
  maxWidth: '500px',
  fontFamily: 'Arial',
};

//Placeholder need to query projects
const optionsProjects = [
  { value: 'None', label: 'None' },
  { value: 'Project 1', label: 'Project 1' },
  { value: 'Project 2', label: 'Project 2' },
  { value: 'Project 3', label: 'Project 3' },
]

const optionsTeamBuildType = [
  { value: 'manual', label: 'Manual' },
  { value: 'random', label: 'Random' },
  { value: 'criteria', label: 'Criteria Based' },
]

const Profile = () =>  {

  const [isCreateProjectShown, setIsCreateProjectShown] = useState(true);
  const [isRosterShown, setIsRosterShown] = useState(false);
  const [isTeamBuilderShown, setIsTeamBuilderShown] = useState(false);
  const [isViewProjectsShown, setIsViewProjectsShown] = useState(false);
  const [isInvitesShown, setIsInvitesShown] = useState(false);
  

  const [isManualTeamBuilderShown, setIsManualTeamBuilderShown] = useState(false);
  const [isRandomTeamBuilderShown, setIsRandomTeamBuilderShown] = useState(false);
  const [isCriteriaTeamBuilderShown, setIsCriteriaTeamBuilderShown] = useState(false);

  const [isProjectModalShown, setIsProjectModalShown] = useState(false);

  const onChange = (event) => {
  
    console.log(event.value)

    if (event.value === 'criteria') {

      setIsManualTeamBuilderShown(false);
      setIsRandomTeamBuilderShown(false);
      setIsCriteriaTeamBuilderShown(true);
      return true;

    }
    else if (event.value === 'random') {
      setIsManualTeamBuilderShown(false);
      setIsRandomTeamBuilderShown(true);
      setIsCriteriaTeamBuilderShown(false);
      return true;
    }
    else if (event.value === 'manual') {
      setIsManualTeamBuilderShown(true);
      setIsRandomTeamBuilderShown(false);
      setIsCriteriaTeamBuilderShown(false);

      return true;
    }
    else {
      setIsManualTeamBuilderShown(false);
      setIsRandomTeamBuilderShown(false);
      setIsCriteriaTeamBuilderShown(false);

      return false;
    }

  };

  

  const displayCreateProject = event => {
    // 👇️ toggle visibility
    setIsCreateProjectShown(true);
    setIsRosterShown(false);
    setIsTeamBuilderShown(false);
    setIsViewProjectsShown(false);
    setIsInvitesShown(false);
  };

  const displayRoster = event => {
    // 👇️ toggle visibility
    setIsCreateProjectShown(false);
    setIsRosterShown(true);
    setIsTeamBuilderShown(false);
    setIsViewProjectsShown(false);
    setIsInvitesShown(false);
  };

  const displayTeamBuilder = event => {
    // 👇️ toggle visibility
    setIsCreateProjectShown(false);
    setIsRosterShown(false);
    setIsTeamBuilderShown(true);
    setIsViewProjectsShown(false);
    setIsInvitesShown(false);
  };

  const displayViewProjects = event => {
    // 👇️ toggle visibility
    setIsCreateProjectShown(false);
    setIsRosterShown(false);
    setIsTeamBuilderShown(false);
    setIsViewProjectsShown(true);
    setIsInvitesShown(false);
  };

  const displayInvites = event => {
    // 👇️ toggle visibility
    setIsCreateProjectShown(false);
    setIsRosterShown(false);
    setIsTeamBuilderShown(false);
    setIsViewProjectsShown(false);
    setIsInvitesShown(true);
  };

  const displayProjectModal = event => {
    // 👇️ toggle visibility
    setIsProjectModalShown(true);
  };

  const closeProjectModal = event => {
    // 👇️ toggle visibility
    setIsProjectModalShown(false);
  };


return (

  <Container style={{color: 'var(--green)'}}>
    <Modal.Dialog   style={{display: isProjectModalShown ?  'block' : 'none'}}>
      <Modal.Header closeButton onClick={closeProjectModal}>
        <Modal.Title >Project Name</Modal.Title>
      </Modal.Header>

      <Modal.Body >
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Enter Team Name</Form.Label>
          <Container fluid className="d-flex inline p-0">
            <Col className='col-10'>
              <Form.Control type="Text" placeholder="Team Name" />
            </Col>
            <Col>
              <Button variant="primary" type="submit">Add</Button>
               
            </Col>
          </Container>
        </Form.Group>
        <Table striped bordered hover size="sm"  style={{color: 'var(--green)'}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>1</td>
              <td>Team1</td>
              <td><Button variant="success" size="sm">Add Users</Button><Button variant="danger" size="sm">Remove Team</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Team2</td>
              <td><Button variant="success" size="sm">Add Users</Button><Button variant="danger" size="sm">Remove Team</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Team3</td>
              <td><Button variant="success" size="sm">Add Users</Button><Button variant="danger" size="sm">Remove Team</Button></td>
            </tr>
          </tbody>
        </Table>
        <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Label>Enter Username</Form.Label>
        <Container fluid className="d-flex inline p-0">
          <Col className='col-10'>
            <Form.Control type="Text" placeholder="Username" />
          </Col>
          <Col>
            <Button variant="primary" type="submit">Add</Button>             
          </Col>
        </Container>
        </Form.Group>
        <Table striped bordered hover size="sm"  style={{color: 'var(--green)'}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>1</td>
              <td>User1</td>
              <td><Button variant="danger" size="sm">Remove</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>User2</td>
              <td><Button variant="danger" size="sm">Remove</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>User3</td>
              <td><Button variant="danger" size="sm">Remove</Button></td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeProjectModal}>Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
      </Modal.Dialog>
        <Col>
          <Row className='projectLinksContainer'>
    <Breadcrumb className="d-flex justify-content-center">
      <Breadcrumb.Item onClick={displayCreateProject}>
        Create Project
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayRoster}>
        Manage Roster
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayTeamBuilder}>
        Team Builder
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayViewProjects}>
        View Projects
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayInvites}>
        Invites
      </Breadcrumb.Item>
    </Breadcrumb>
    </Row>

    <Row  className="justify-content-center"  style={{display: isCreateProjectShown ?  'block' : 'none'}}>
      <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
        <Form className='createProjectForm'>
          <div className="justify-content-center fs-3 fw-italic"><h2>Create Project</h2></div>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Project Name</Form.Label>
            <Form.Control type="Text" placeholder="Project Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Number of Project Members</Form.Label>
            <Form.Control type="Text" placeholder="Enter Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Number of Teams</Form.Label>
            <Form.Control type="Text" placeholder="Enter Number" />
          </Form.Group>
          <Container className="d-flex justify-content-center mt-4">
            <Button className='submitBtn' type="submit">
              Launch Project
            </Button>
          </Container>
        </Form>
      </Container>
    </Row>
    
    <Row className="justify-content-center"  style={{display: isRosterShown ?  'block' : 'none'}}>
      <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
        <Form>
          <div className="justify-content-center fs-3 fw-italic">Manage Roster</div>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Select Project</Form.Label>
            <Select options={optionsProjects} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Search for User</Form.Label>
            <Container fluid className="d-flex inline p-0">
              <Col className='col-10'>
                <Form.Control type="Text" placeholder="Enter Username" />
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
                <th>Username</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td>1</td>
                <td>User1</td>
                <td><Button variant="danger" size="sm">Remove</Button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>User2</td>
                <td><Button variant="danger" size="sm">Remove</Button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>User3</td>
                <td><Button variant="danger" size="sm">Remove</Button></td>
              </tr>
            </tbody>
          </Table>        
          <Container className="d-flex justify-content-center mt-4">
            <Button className='submitBtn' type="submit">
              Save Users
            </Button>
          </Container>
        </Form>
      </Container>
    </Row>

    <Row  className="justify-content-center"  style={{display: isTeamBuilderShown ?  'block' : 'none'}}>
      
      <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
      
      <Form>
      <div className="justify-content-center fs-3 fw-italic">Team Builder</div>
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Select Project</Form.Label>
          <Select options={optionsProjects} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Build Type</Form.Label>
          <Select options={optionsTeamBuildType} onChange={onChange}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicInput" style={{display: isManualTeamBuilderShown ?  'block' : 'none'}}>
          <Form.Label>Enter Team Name</Form.Label>
          <Container fluid className="d-flex inline p-0">
            <Col className='col-10'>
              <Form.Control type="Text" placeholder="Enter Username" />
            </Col>
            <Col>
              <Button className='submitBtn' type="submit">
                Add
              </Button>
               
            </Col>
          </Container>
          
          
        </Form.Group>
        <Table striped bordered hover size="sm" style={{display: isManualTeamBuilderShown ?  'block' : 'none'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Team Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td>1</td>
          <td>Team1</td>
          <td><Button variant="success" size="sm">Add Users</Button><Button variant="danger" size="sm">Remove Team</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Team2</td>
          <td><Button variant="success" size="sm">Add Users</Button><Button variant="danger" size="sm">Remove Team</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Team3</td>
          <td><Button variant="success" size="sm">Add Users</Button><Button variant="danger" size="sm">Remove Team</Button></td>
        </tr>
      </tbody>
    </Table>
        
        <Container className="d-flex justify-content-center mt-4" style={{display: isManualTeamBuilderShown ?  'block' : 'none'}}>
          <Button className='submitBtn' type="submit" style={{display: isManualTeamBuilderShown ?  'block' : 'none'}}>
            Add Teams
          </Button>
        </Container>

        <Container className="d-flex justify-content-center mt-4" style={{display: isRandomTeamBuilderShown ?  'block' : 'none'}}>
          <Button className='submitBtn' type="submit" style={{display: isRandomTeamBuilderShown ?  'block' : 'none'}}>
            Create Teams Randomly
          </Button>
        </Container>

        <Container className="d-flex justify-content-center mt-4" style={{display: isCriteriaTeamBuilderShown ?  'block' : 'none'}}>
          <Button className='submitBtn' type="submit" style={{display: isCriteriaTeamBuilderShown ?  'block' : 'none'}}>
            Create Teams Based On Criteria
          </Button>
        </Container>
        
      </Form>
    </Container>

    </Row>
    <Row  className="justify-content-center"  style={{display: isViewProjectsShown ?  'block' : 'none'}}>
      
      <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
      
      <Form>
      <div className="justify-content-center fs-3 fw-italic">View Projects</div>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Projects</th>
          <th></th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td>1</td>
          <td>Project 1</td>
          <td><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Project 2</td>
          <td><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Project 3</td>
          <td><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Project 4</td>
          <td><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Project 5</td>
          <td><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Project 6</td>
          <td><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr>
      </tbody>
    </Table>
        
      </Form>
    </Container>

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
  </Col>
 
  
  </Container>


);

}
export default Profile;
