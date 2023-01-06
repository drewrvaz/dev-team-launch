import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Form, 
  Button, 
  Card,
  Container} from 'react-bootstrap';


import Auth from '../utils/auth';
import '../index.css'


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Container className='loginContainer py-5 h-100'>
        <Card className="loginCard">
          <h2>Login</h2>
          <p>Please enter your login and password!</p>
          <Form onSubmit={handleFormSubmit}>
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
              <p>Don't have an account?<a href='signup' className='signupLink'> Sign Up!</a></p>
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

export default Login;
