import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import {useState} from 'react';
import { GET_USER } from '../utils/queries';

const optionsAvailability = [
  { value: '3', label: 'High' },
  { value: '2', label: 'Medium' },
  { value: '1', label: 'Low' }
]

const optionsExperience = [
  { value: '3', label: 'None' },
  { value: '2', label: 'Some' },
  { value: '1', label: 'A Lot' }
]

const divStyle = {
  maxWidth: '500px',
  fontFamily: 'Arial',
};

const Profile = () =>  {
  const [userData, setUserData] = useState({
    username: "",
  });

  const { loading, data } = useQuery(GET_USER, {
    variables: {username: Auth.getProfile().data.username}
  });
  
  
  // console.log(data.user.username);

  if (data && userData.username === "") {

    console.log(data.user.username);
    setUserData({
      username: data.user.username,
    });

  }

  if (loading) {
    return <h2>LOADING...</h2>;
  }

return (
  <Container className="d-flex justify-content-center">
  <Container className="profileFormContainer mt-5 p-3 border border-dark rounded" style={divStyle}>
    
    <Form className='profileForm'>
      <Form.Group className="mb-3" controlId="availability">
        <Form.Label className="fw-bold">Availability</Form.Label>
        <Select options={optionsAvailability} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="availability">
        <Form.Label>Experience</Form.Label>
        <Select options={optionsExperience} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="ConfirmPassword" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" id="">
      <Form.Label>Skills:</Form.Label>
      <Container className="ml-3">
          <Row>
            <Col>
            <Form.Check type="checkbox" label="Frontend" />
            </Col>
            <Col>
            <Form.Check className="ml-3"type="checkbox" label="Backend" />
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Check type="checkbox" label="Database" />
            </Col>
            <Col>
            <Form.Check className="ml-3"type="checkbox" label="Infrastructure" />
            </Col>
          </Row>
        </Container>
        
      </Form.Group>
      <Container className="d-flex justify-content-center mt-4">
        <Button className='profileSaveBtn' type="submit">
          Save
        </Button>
      </Container>
      
    </Form>
  </Container>
  </Container>
);

}
export default Profile;
