import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import Table from 'react-bootstrap/Table';

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
  
  const optionsTeamBuildType = [
    { value: 'manual', label: 'Manual' },
    { value: 'random', label: 'Random' },
    { value: 'criteria', label: 'Criteria Based' },
  ]

const ManageRoster = () =>  {

    return (
    <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
        <Form>
        <div className="justify-content-center fs-3">Manage Roster</div>
            <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Select Project</Form.Label>
            <Select options={optionsProjects} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Search for User</Form.Label>
            <Container fluid className="d-flex inline p-0">
                <Col className='col-10'>
                <Form.Control type="Text" placeholder="Enter Username" />
                </Col>
                <Col>
                <Button variant="primary" type="submit">Search</Button>
                
                </Col>
            </Container>
            
            
            </Form.Group>
            <Table striped bordered hover size="sm" style={{maxHeight:'10px',overflow:'auto'}}>
        <thead>
            <tr>
            <th>#</th>
            <th>Username</th>
            <th></th>
            </tr>
        </thead>
        <tbody >
            <tr>
            <td>1</td>
            <td>User1</td>
            <td><Button variant="danger" size="sm">Remove</Button></td>
            </tr>
            <tr>
            <td>2</td>
            <td>User2</td>
            <td><Button variant="danger" size="sm">Remove</Button></td>
            </tr>
            <tr>
            <td>3</td>
            <td>User3</td>
            <td><Button variant="danger" size="sm">Remove</Button></td>
            </tr>
        </tbody>
        </Table>
            
            <Container className="d-flex justify-content-center mt-4">
            <Button variant="primary" type="submit">
                Save Users
            </Button>
            </Container>
            
        </Form>
        </Container>
    )
}

export default ManageRoster;