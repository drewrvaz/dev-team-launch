import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

// import ProjectModal from '../components/ProjectModal';
import ViewAssignedProjects from '../components/ViewAssignedProjects';
import ViewMyProjects from '../components/ViewMyProjects';

const divStyle = {
  maxWidth: '500px',
  fontFamily: 'Arial',
};

//Placeholder need to query projects
const optionsProjects = [
  { value: 'None', label: 'None' },
  { value: 'Project 1', label: 'Project 1' },
  { value: 'Project 2', label: 'Project 2' },
  { value: 'Project 3', label: 'Project 3' },
]

const ViewProjects = () =>  {


  const [isViewMyProjectsShown, setIsViewMyProjectsShown] = useState(true);
  const [isViewAssignedProjectsShown, setIsViewAssignedProjectsShown] = useState(false);
  


  const displayViewMyProjects = event => {
    // 👇️ toggle visibility
    setIsViewMyProjectsShown(true);
    setIsViewAssignedProjectsShown(false);

  };

  const displayViewAssignedProjects = event => {
    // 👇️ toggle visibility
    setIsViewMyProjectsShown(false);
    setIsViewAssignedProjectsShown(true);
  };


  // const displayProjectModal = event => {
  //   // 👇️ toggle visibility
  //   setIsProjectModalShown(true);
  // };

  // const closeProjectModal = event => {
  //   // 👇️ toggle visibility
  //   setIsProjectModalShown(false);
  // };

return (

  <Container>
  <Col>
    <Row >
    <Breadcrumb className="d-flex justify-content-center">
      <Breadcrumb.Item onClick={displayViewMyProjects}>
        My Projects
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayViewAssignedProjects}>
        Assigned Projects
      </Breadcrumb.Item>
    </Breadcrumb>
    </Row>

    <Row  className="justify-content-center"  style={{display: isViewMyProjectsShown ?  'block' : 'none'}}>
      <ViewMyProjects />
    </Row>
    <Row  className="justify-content-center"  style={{display: isViewAssignedProjectsShown ?  'block' : 'none'}}>
     <ViewAssignedProjects />
    </Row>

    {/* <div className='modal' tabindex="-1" style={{display: 'block'}}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
  
  </Col>
 
  
  </Container>


);

}
export default ViewProjects;