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

const divStyle = {
    maxWidth: '500px',
    fontFamily: 'Arial',
};

const CreateProject = () =>  {

    return (

    <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
        
        <Form>
        <div className="justify-content-center fs-3 fw-italic">Create Project</div>
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
            <Button variant="primary" type="submit">
                Launch Project
            </Button>
            </Container>
            
        </Form>
        </Container>
    )
}

export default CreateProject;