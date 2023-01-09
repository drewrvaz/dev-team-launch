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

import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { CREATE_CLASS } from '../utils/mutations';

const divStyle = {
    maxWidth: '500px',
    fontFamily: 'Arial',
};

const CreateProject = () =>  {

    const [classData, setClassData] = useState({
        name: "",
        username: Auth.getProfile().data.username,
        description: "",
        teamSize: "",
        classSize: ""
      });

      const [createClass, { createClassError, createClassData }] = useMutation(CREATE_CLASS);

      const handleProjectName = (event) => {
        setClassData({ ...classData, name: event.target.value });
      };

      const handleDescription = (event) => {
        setClassData({ ...classData, description: event.target.value });
      };

      const handleClassSize = (event) => {
        setClassData({ ...classData, classSize: event.target.value });
      };

      const handleTeamSize = (event) => {
        setClassData({ ...classData, teamSize: event.target.value });
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            
            console.log(classData);
            const { createClassData } = await createClass({
                variables: { 
                    name: classData.name,
                    username: classData.username,
                    description: classData.description,
                    teamSize: parseInt(classData.teamSize),
                    classSize: parseInt(classData.classSize), 
                },
              });

        } catch (err) {
          console.error(err);
        }
    
        setClassData({
            name: "",
            username: Auth.getProfile().data.username,
            description: "",
            teamSize: "",
            classSize: "",
        });
    };

    return (

    <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
        
        <Form onSubmit={handleFormSubmit}>
        <div className="justify-content-center fs-3 fw-italic">Create Project</div>
            <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Project Name</Form.Label>
            <Form.Control type="Text" placeholder="Project Name" onChange={handleProjectName} value={classData.name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Description" onChange={handleDescription} value={classData.description}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Number of Project Members</Form.Label>
            <Form.Control type="Number" placeholder="10" onChange={handleClassSize} value={classData.classSize}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Number of Teams</Form.Label>
            <Form.Control type="Number" placeholder="5" onChange={handleTeamSize} value={classData.teamSize}/>
            </Form.Group>
            
            <Container className="d-flex justify-content-center mt-4">
            <Button variant="primary" type="submit">
                Create Project
            </Button>
            </Container>
            
        </Form>
        </Container>
    )
}

export default CreateProject;