import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { GET_USER, QUERY_IN_CLASSES } from '../utils/queries';

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
  
  const ViewAssignedProjects = () =>  {

    const [isProjectModalShown, setIsProjectModalShown] = useState(false);
    const [userData, setUserData] = useState({ username: "" });
    const [projectData, setProjectData] = useState({ projects : [] });  
    
    const displayProjectModal = event => {
      // 👇️ toggle visibility
      setIsProjectModalShown(true);
    };
  
    const closeProjectModal = event => {
      // 👇️ toggle visibility
      setIsProjectModalShown(false);
    };

    const { loading, data } = useQuery(QUERY_IN_CLASSES, {
      variables: {username: Auth.getProfile().data.username}
    });
  
    console.log(data);

    if (data && userData.username === "") {
  
      setUserData({
        username: Auth.getProfile().data.username,
      });

      setProjectData({
        projects: data.inClasses,
      });
    }

      
    if (loading) {
      return <h2>LOADING...</h2>;
    }

    console.log(projectData.projects);
  
    return (
      <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
      
      <Form>
      <div className="justify-content-center fs-3">Assigned Projects</div>
        <Table striped  bordered hover size="sm">
      <thead>
        <tr>
          <th>Project Names</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody >
      {projectData.projects.map(data => 
        <tr>
          <td><Link key={data._id} to={this.setProfile(e.user.attributes.username)}>
                <button type="button" onClick={{displayProjectModal}}>{data.name}</button>
              </Link>
          </td>
          <td>{data.description}</td>
        </tr>
        )}
        {/* <tr>
          <td>1</td>
          <td>Project 1</td>
          <td><Button variant="primary" size="sm">View</Button><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Project 2</td>
          <td><Button variant="primary" size="sm">View</Button><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Project 3</td>
          <td><Button variant="primary" size="sm">View</Button><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Project 4</td>
          <td><Button variant="primary" size="sm">View</Button><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Project 5</td>
          <td><Button variant="primary" size="sm">View</Button><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Project 6</td>
          <td><Button variant="primary" size="sm">View</Button><Button variant="success" size="sm" onClick={displayProjectModal}>Edit</Button><Button variant="danger" size="sm">Remove</Button></td>
        </tr> */}
      </tbody>
    </Table>
        
      </Form>

      <div className="modal" tabIndex="-1" style={{display: isProjectModalShown ?  'block' : 'none'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeProjectModal}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* <Modal.Dialog   style={{display: isProjectModalShown ?  'block' : 'none'}}>
        <Modal.Header closeButton onClick={closeProjectModal}>
          <Modal.Title>Project Name</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
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
        <Table striped bordered hover size="sm">
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
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th></th>
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
      </Modal.Dialog> */}
    </Container>
    
    );
}

export default ViewAssignedProjects;