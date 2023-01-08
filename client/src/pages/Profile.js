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
  { value: '1', label: 'Low' },
  { value: '2', label: 'Medium' },
  { value: '3', label: 'High' },
]

const optionsExperience = [
  { value: '1', label: 'None' },
  { value: '2', label: 'Some' },
  { value: '3', label: 'A Lot' },
]

const divStyle = {
  maxWidth: '500px',
  fontFamily: 'Arial',
};

const saveProfile = event => {
  console.log(event.target);
};

const Profile = () =>  {
  const [userData, setUserData] = useState({
    username: "",
  });

  const { loading, data } = useQuery(GET_USER, {
    variables: {username: Auth.getProfile().data.username}
  });
  

  if (data && userData.username === "") {

    setUserData({
      username: data.user.username,
      _id: data.user._id,
      skills: data.user.skills,
      availability: data.user.availability,
      experience: data.user.experience,
    });

  }

  if (loading) {
    return <h2>LOADING...</h2>;
  }

return (
  <Container className="d-flex justify-content-center">
  <Container className="mt-5 p-3 border border-dark rounded bg-light " style={divStyle}>
  <Container className="d-flex justify-content-center fs-3 fw-italic"> <span>{userData.username}</span> </Container>
    <Form>
      <Form.Group className="mb-3" controlId="availability">
        <Form.Label className="fw-bold">Availability</Form.Label>
        <Select name="selectAvailability" options={optionsAvailability} defaultValue={optionsAvailability[userData.availability - 1]}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="experience">
        <Form.Label className="fw-bold">Experience</Form.Label>
        <Select name="selectExperience" options={optionsExperience} defaultValue={optionsExperience[userData.experience - 1]}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="fw-bold">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="fw-bold">Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="ConfirmPassword" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" id="">
      <Form.Label className="fw-bold">Skills:</Form.Label>
      <Container className="ml-3">
          <Row>
            <Col>
            <Form.Check type="checkbox" label="Frontend" defaultChecked={userData.skills?.includes('Frontend')}/>
            </Col>
            <Col>
            <Form.Check className="ml-3"type="checkbox" label="Backend" defaultChecked={userData.skills?.includes('Backend')}/>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Check type="checkbox" label="Database" defaultChecked={userData.skills?.includes('Database')}/>
            </Col>
            <Col>
            <Form.Check className="ml-3"type="checkbox" label="Infrastructure" defaultChecked={userData.skills?.includes('Infrastructure')}/>
            </Col>
          </Row>
        </Container>
        
      </Form.Group>
      <Container className="d-flex justify-content-center mt-4">
        <Button variant="primary" onClick={saveProfile}>Save</Button>
      </Container>
      
    </Form>
  </Container>
  </Container>
);

}
export default Profile;