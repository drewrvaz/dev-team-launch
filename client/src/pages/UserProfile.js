
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container , Row, CardGroup, Card, Button } from 'react-bootstrap' 
import ListGroup  from 'react-bootstrap/ListGroup'; 
import  './App.css';
const UserProfile = ()  => { 
  
  //const updateSkills = {
//
 // };
 // const updateExperience = {
//
  //};
  //const updateAvailability = {
//
 // };
 // const updatePassword = {
//
  //};

  return (  
    <div className="UserProfile">  
    <h2 style={{textAlign: "center", color: "#00a5e0", marginBottom: "5px"}}>My Profile</h2> 
    <Container fluid className = "align-items-center" style={{background: "gray", height: "90vh", alignContent: "center"}}> 
    <Row>
      <CardGroup>
      <Card  className="border rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px", margin: "0 20px",}}>
        <Card.Title className="mb-0 text-center">Skills</Card.Title>
        <Card.Body className="mb-0">
            <  ListGroup>
            <ListGroup.Item> skill1  </ListGroup.Item>
            <ListGroup.Item> skill2  </ListGroup.Item>
            <ListGroup.Item> skill3 </ListGroup.Item>
            <ListGroup.Item> skill4  </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer><Button variant="primary" className="btn-xs btn-center">Update</Button></Card.Footer>
        </Card>
  
        <Card className="border rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px", margin: "0 20px"}}>
          <Card.Title className="mb-0 text-center">Experience</Card.Title>
          <Card.Body className="mb-0">
          <  ListGroup>
          <ListGroup.Item> </ListGroup.Item>
          <ListGroup.Item> </ListGroup.Item>
            <ListGroup.Item> high </ListGroup.Item>
            <ListGroup.Item>  </ListGroup.Item>
            </  ListGroup>
          </Card.Body>
          <Card.Footer><Button variant="primary" className="btn-xs btn-center">Update</Button></Card.Footer>
          </Card>
    
          <Card className="border rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px",  margin: "0 20px"}}>
            <Card.Title className="mb-0 text-center">Availability</Card.Title>
            <Card.Body className="mb-0">
            <  ListGroup>
            <ListGroup.Item>  </ListGroup.Item>
            <ListGroup.Item>   </ListGroup.Item>
            <ListGroup.Item> low  </ListGroup.Item>
            <ListGroup.Item>   </ListGroup.Item>
            </  ListGroup>
            </Card.Body>
            <Card.Footer><Button variant="primary" className="btn-xs btn-center">Update</Button></Card.Footer>
            </Card>
            
            <Card className="border rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px",  margin: "0 20px"}}>
              <Card.Title className="mb-0 text-center">Password</Card.Title>
              <Card.Body className="mb-0">
              <  ListGroup>
              <ListGroup.Item>  </ListGroup.Item>
              <ListGroup.Item>  </ListGroup.Item>
            <ListGroup.Item> xxxxxxx  </ListGroup.Item>
            <ListGroup.Item>  </ListGroup.Item>
            </  ListGroup>
              </Card.Body>
              <Card.Footer><Button variant="primary" className="btn-xs btn-center">Update</Button></Card.Footer>
              </Card>
              </CardGroup>
              </Row>
  </Container>  
    </div>  
  );  
}  
export default UserProfile;  