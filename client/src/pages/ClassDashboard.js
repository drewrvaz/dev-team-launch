import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container , Row, CardGroup, Card, Button } from 'react-bootstrap' 
import ListGroup  from 'react-bootstrap/ListGroup'; 
//import { useMutation } from '@apollo/client';
//import { SHOW_CLASS, UPDATE_CLASS } from '../utils/mutations.js';
//import { SHOW_TEAM. UPDATE_TEAM } from '../utils/mutations.js';
//import {SHOW_INVITE, UPDATE_INVITE } from '../utils/mutations.js';
const ClassDashboard = () =>  {  
 


// create function to handle saving a book to our database
const handleSaveBook = async (bookId) => {
  // find the book in `searchedBooks` state by the matching id
  const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }

  try {
    const { data } = await saveBook({
      variables: { newBook: {...bookToSave } },
    });

    // if book successfully saves to user's account, save book id to state
    setSavedBookIds([...savedBookIds, bookToSave.bookId]);
  } catch (err) {
    console.error(err);
  }
};

  return (  
    <div className="ClassDashboard">  
     <h2 style={{textAlign: "center", color: "#00a5e0", marginBottom: "5px"}}>Class Dashboard</h2> 
    <Container fluid  className = "align-items-center" style={{background: "gray",  color: "#00a5e0", height: "90vh", alignContent: "center" }}> 
    <Row>
        <CardGroup>
        <Card className="border rounded card-border-dark mt-3 mb-3" style={{height: "12rem", width: "10rem", color: "#00a5e0"}}>
          <Card.Title className="mb-0 text-center">Classes</Card.Title>
          <Card.Body className="mb-0">
          <  ListGroup>
            <ListGroup.Item> session-1  </ListGroup.Item>
            <ListGroup.Item> session-2  </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Footer><Button className="btn-xs btn-center" variant="primary">Update</Button></Card.Footer>
          </Card>
        
          <Card className="border rounded card-border-dark mt-3 mb-3" style={{height: "12rem", width: "10rem", color: "#00a5e0"}}>
            <Card.Title className="mb-0 text-center">Teams</Card.Title>
            <Card.Body className="mb-0">
             <  ListGroup>
            <ListGroup.Item> team-1</ListGroup.Item>
            <ListGroup.Item> team-2</ListGroup.Item>
            <ListGroup.Item> team-3</ListGroup.Item>
            <ListGroup.Item> team-4</ListGroup.Item>
            </  ListGroup>
            </Card.Body>
            <Card.Footer><Button className="btn-xs btn-center" variant="primary">Update</Button></Card.Footer>
            </Card>
            
            <Card className="border rounded card-border-dark mt-3 mb-3" style={{height: "12rem", width: "10rem", color: "#00a5e0"}}>
              <Card.Title className="mb-0 text-center">Invites</Card.Title>
              <Card.Body className="mb-0">
              <ListGroup>
            <ListGroup.Item>   </ListGroup.Item>
            <ListGroup.Item>  </ListGroup.Item>
            <ListGroup.Item> team1</ListGroup.Item>
            <ListGroup.Item> team-2</ListGroup.Item>
            </ListGroup>
              </Card.Body>
              <Card.Footer><Button className="btn-xs" variant="primary">Accept</Button></Card.Footer>
              </Card>
            
              <Card className="border rounded card-border-dark mt-3 mb-3" style={{height: "12rem", width: "10rem", color: "#00a5e0"}}>
                <Card.Title className="mb-0 text-center">Avatar</Card.Title>
                <Card.Body className="mb-0">
                <  ListGroup>
                <ListGroup.Item> team-1</ListGroup.Item>
            <ListGroup.Item> team-2</ListGroup.Item>
                <ListGroup.Item> avatar-1  </ListGroup.Item>
                </  ListGroup>
                </Card.Body>
                <Card.Footer><Button className= "btn-xs" variant="primary">Update</Button></Card.Footer>
                </Card>
        </CardGroup>
        </Row>
        </Container>
      </div>  
  );  
}
export default ClassDashboard;  