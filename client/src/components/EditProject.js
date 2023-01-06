// see SignupForm.js for comments
import React, { useEffect, useState } from 'react';
import { Form, Button, Alert, Modal, InputGroup } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

const EditProject = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  // const [login, { error }] = useMutation(LOGIN_USER);

  // useEffect(() => {
  //   if (error) {
  //     setShowAlert(true);
  //   } else {
  //     setShowAlert(false);
  //   }
  // }, [error]);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   // check if form has everything (as per react-bootstrap docs)
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   try {
  //     const { data } = await login({
  //       variables: { ...userFormData }
  //     });

  //     Auth.login(data.login.token);
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   setUserFormData({
  //     username: '',
  //     email: '',
  //     password: '',
  //   });
  // };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProject;
