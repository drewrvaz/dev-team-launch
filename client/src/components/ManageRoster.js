import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import Table from 'react-bootstrap/Table';

import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';

import { GET_MY_CLASSES } from '../utils/queries';
import Auth from '../utils/auth';

const divStyle = {
    maxWidth: '500px',
    fontFamily: 'Arial',
};

const ManageRoster = () =>  {

    const [projectData, setProjectData] = useState({
        projects: []
      });

    const { loading, data } = useQuery(GET_MY_CLASSES, {
    variables: {username: Auth.getProfile().data.username}
    });

    if (data && projectData.projects.length === 0) {

        let projectNames = [];

        for (let i = 0; i < data.myClasses.length;i++){
            projectNames.push({value: data.myClasses[i].name, label: data.myClasses[i].name});
            console.log(data.myClasses[i].name)
        }
        setProjectData({projects : projectNames});
        console.log(data);
        console.log(projectData);
    };

    if (loading) {
    return <h2>LOADING...</h2>;
    }

    return (
    <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
        <Form>
        <div className="justify-content-center fs-3">Manage Roster</div>
            <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Select Project</Form.Label>
            <Select options={projectData.projects} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Add User</Form.Label>
            <Container fluid className="d-flex inline p-0">
                <Col className='col-10'>
                <Form.Control type="Text" placeholder="Enter Username" />
                </Col>
                <Col>
                <Button variant="primary" type="submit">Add</Button>
                
                </Col>
            </Container>
            
            
            </Form.Group>
            {/* <Table striped bordered hover size="sm" style={{maxHeight:'10px',overflow:'auto'}}>
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
        </Table> */}
            
            {/* <Container className="d-flex justify-content-center mt-4">
            <Button variant="primary" type="submit">
                Save Users
            </Button>
            </Container> */}
            
        </Form>
        </Container>
    )
}

export default ManageRoster;