import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

// import { useMutation } from '@apollo/client';
// import { CREATE_PROJECT } from '../utils/mutations';

const CreateProject = () => {
  // Code to tie backend in goes here

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label htmlFor='projectname'>Project Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your Project Name'
            name='projectname'
            onChange={handleInputChange}
            value={userFormData.projectname}
            required
          />
          <Form.Control.Feedback type='invalid'>Project Name is required!</Form.Control.Feedback>
        </Form.Group>
          
        <Form.Group>
          <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </>
  )
}
