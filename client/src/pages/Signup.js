import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, 
  Button, 
  Card,
  Container} from 'react-bootstrap';
  import '../index.css'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Container className='loginContainer py-5 h-100'>
        <Card className='loginCard'>
          <h2>Sign Up</h2>
          <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label htmlFor='email'>Username</Form.Label>
            <Form.Control 
              className='input'
              type='text'
              placeholder='Your Username'
              name='username'
              value={formState.name}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type='invalid'> A username is required!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control 
                className='input'
                type='email'
                placeholder='Your Email'
                name='email'
                value={formState.email}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Control
                className='input'
                type='password'
                placeholder='Your Password'
                name='password'
                value={formState.password}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
            </Form.Group>

            <Button className='submitBtn btn-outline-light btn-lg px-5' type='submit'>
              Login
            </Button>
                
            <Form.Group className='signUp'>
              <p>Already have an account?<a href='/' className='loginLink'> Log in!</a></p>
            </Form.Group>
          </Form>
          {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
        </Card>
      </Container>
    </>
  );
};

export default Signup;
