import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Container, Form, InputGroup, Modal, Row  } from 'react-bootstrap';

import Auth from '../utils/auth';
import '../index.css'
// import Auth from '../utils/auth';
// import { removeBookId } from '../utils/localStorage';
// import { useQuery, useMutation } from '@apollo/client';
// import { GET_ME } from '../utils/queries';
// import { REMOVE_BOOK } from '../utils/mutations';

const ProjectPage = () => {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Row>
        <Container className="createProjectContainer is-flex-direction-row max-width:960px margin-left:auto margin-right:auto margin-top:20px margin-bottom:20px align-items:bottom">
          <h1>Create a Project</h1>
          <Card className='createProjectCard'>
            <Form>
              <Form.Group>
                {/* <Form.Label htmlFor='projectname'>Project Name</Form.Label> */}
                <Form.Control
                  type='text'
                  placeholder='Enter a name for your project'
                  name='projectname'
                  // onChange={handleInputChange}
                  // value={userFormData.projectname}
                  required
                />
                <Form.Control.Feedback type='invalid'>Project Name is required!</Form.Control.Feedback>
              </Form.Group>
    
              <Form.Group>
                <InputGroup className="mb-3">
                {/* <Form.Label htmlFor='searchuser'>Search for Users</Form.Label> */}
                <Form.Control
                  placeholder="Search for users to add to your project"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Search
                </Button>
                </InputGroup>
              </Form.Group>

              <Form.Group>
                <Button variant="outline-secondary" id="button-addon2">
                  Confirm Create
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </Container>
      </Row>

      <Container>
        <h1>Your Created Projects</h1>
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title><h3>Insert Title of Project Here</h3></Card.Title>
                <Card.Text>
                  We could list the teams for each project here. We would have to add all of the project names from the array that was created for the project. But we don't have to do that. Just a thought.
                </Card.Text>
                <Button variant="outline-secondary" id="button-addon2">
                  View Project
                </Button>
                <Button variant="outline-secondary" id="button-addon2">
                  Edit Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      </Container>

      <Container>
      <h1>Teams you've joined</h1>
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title><h3>Insert Title of Project Here</h3></Card.Title>
                <Card.Text>
                  We could list the users part of the team here. We would have to add all of the usernames from the array that was created for the team. Or we could have a button to push that allows the user to view the team.
                </Card.Text>
                <Button variant="outline-secondary" id="button-addon2">
                  View Team
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      </Container>
    </>
  )
};

export default ProjectPage;
