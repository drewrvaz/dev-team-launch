import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

// import { useMutation } from '@apollo/client';
// import { CREATE_PROJECT } from '../utils/mutations';

const ViewProject = () => {
  // Code to tie backend in goes here
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ViewProject;