import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { GET_USER } from '../utils/queries';
import {ADD_AVAILABILITY} from '../utils/mutations';

const optionsAvailability = [
  { value: '1', label: 'Low' },
  { value: '2', label: 'Medium' },
  { value: '3', label: 'High' },
]

const divStyle = {
  maxWidth: '500px',
  fontFamily: 'Arial',
};

const UpdateAvailability = () =>  {

  const [userAvailability, setUserAvailability] = useState({ availability: null});
  const [userData, setUserData] = useState({
    username: "",
  });
  const [addAvailability, { error, availabilityData }] = useMutation(ADD_AVAILABILITY);

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

  const handleAvailabilityChange = (event) => {
    const { value } = event;
    setUserAvailability({ ...userAvailability, availability: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addAvailability({
        variables: { username: userData.username, availability: (userAvailability.availability + 1)},
      });
    } catch (err) {
      console.error(err);
    }

    setUserData({
      availability: (userAvailability.availability + 1)
    });
  };

    return (
        <Container className="mt-5 p-3 border border-dark rounded bg-light " style={divStyle}>
        <Container className="d-flex justify-content-center fs-5 fw-italic"> <span>{userData.username}</span> </Container>
        <Container className="d-flex justify-content-center fs-5 fw-italic"> <span>Update Availability</span> </Container>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="availability">
              <Form.Label className="fw-bold">Availability</Form.Label>
              <Select name="availability" options={optionsAvailability} defaultValue={optionsAvailability[userData.availability - 1]} onChange={handleAvailabilityChange}/>
            </Form.Group>
            <Container className="d-flex justify-content-center mt-4">
            <Button variant="primary" type="submit">
                Save
            </Button>
            </Container>
           
          </Form>
        </Container>
    )
}

export default UpdateAvailability;