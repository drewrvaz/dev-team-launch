import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import Table from 'react-bootstrap/Table';
import {useState} from 'react';

const divStyle = {
  maxWidth: '500px',
  fontFamily: 'Arial',
};



const TeamBuilder = () =>  {
  const [isManualTeamBuilderShown, setIsManualTeamBuilderShown] = useState(false);
const [isRandomTeamBuilderShown, setIsRandomTeamBuilderShown] = useState(false);
const [isCriteriaTeamBuilderShown, setIsCriteriaTeamBuilderShown] = useState(false);

const onChange = (event) => {

  if (event.value === 'criteria') {

    setIsManualTeamBuilderShown(false);
    setIsRandomTeamBuilderShown(false);
    setIsCriteriaTeamBuilderShown(true);
    return true;

  }
  else if (event.value === 'random') {
    setIsManualTeamBuilderShown(false);
    setIsRandomTeamBuilderShown(true);
    setIsCriteriaTeamBuilderShown(false);
    return true;
  }
  else if (event.value === 'manual') {
    setIsManualTeamBuilderShown(true);
    setIsRandomTeamBuilderShown(false);
    setIsCriteriaTeamBuilderShown(false);

    return true;
  }
  else {
    setIsManualTeamBuilderShown(false);
    setIsRandomTeamBuilderShown(false);
    setIsCriteriaTeamBuilderShown(false);

    return false;
  }

};

//Placeholder need to query projects
const optionsProjects = [
    { value: 'None', label: 'None' },
    { value: 'Project 1', label: 'Project 1' },
    { value: 'Project 2', label: 'Project 2' },
    { value: 'Project 3', label: 'Project 3' },
  ]
  
  const optionsTeamBuildType = [
    { value: 'manual', label: 'Manual' },
    { value: 'random', label: 'Random' },
    { value: 'criteria', label: 'Criteria Based' },
  ]
  
  return (
        <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
      
      <Form>
      <div className="justify-content-center fs-3 fw-italic">Team Builder</div>
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Select Project</Form.Label>
          <Select options={optionsProjects} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Build Type</Form.Label>
          <Select options={optionsTeamBuildType} onChange={onChange}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicInput" style={{display: isManualTeamBuilderShown ?  'block' : 'none'}}>
          <Form.Label>Enter Team Name</Form.Label>
          <Container fluid className="d-flex inline p-0">
            <Col className='col-10'>
              <Form.Control type="Text" placeholder="Enter Username" />
            </Col>
            <Col>
              <Button variant="primary" type="submit">Add</Button>
               
            </Col>
          </Container>
          
          
        </Form.Group>
        <Table striped bordered hover size="sm" style={{display: isManualTeamBuilderShown ?  'block' : 'none'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Team Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td>1</td>
          <td>Team1</td>
          <td><Button variant="success" size="sm">Add Users</Button><Button variant="danger" size="sm">Remove Team</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Team2</td>
          <td><Button variant="success" size="sm">Add Users</Button><Button variant="danger" size="sm">Remove Team</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Team3</td>
          <td><Button variant="success" size="sm">Add Users</Button><Button variant="danger" size="sm">Remove Team</Button></td>
        </tr>
      </tbody>
    </Table>
        
        <Container className="d-flex justify-content-center mt-4" style={{display: isManualTeamBuilderShown ?  'block' : 'none'}}>
          <Button variant="primary" type="submit" style={{display: isManualTeamBuilderShown ?  'block' : 'none'}}>
            Add Teams
          </Button>
        </Container>

        <Container className="d-flex justify-content-center mt-4" style={{display: isRandomTeamBuilderShown ?  'block' : 'none'}}>
          <Button variant="primary" type="submit" style={{display: isRandomTeamBuilderShown ?  'block' : 'none'}}>
            Create Teams Randomly
          </Button>
        </Container>

        <Container className="d-flex justify-content-center mt-4" style={{display: isCriteriaTeamBuilderShown ?  'block' : 'none'}}>
          <Button variant="primary" type="submit" style={{display: isCriteriaTeamBuilderShown ?  'block' : 'none'}}>
            Create Teams Based On Criteria
          </Button>
        </Container>
        
      </Form>
    </Container>
  )
}

export default TeamBuilder;

