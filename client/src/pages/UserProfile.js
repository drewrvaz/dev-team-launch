
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container , Row, CardGroup, Card, Button, Dropdown } from 'react-bootstrap'; 
import ListGroup  from 'react-bootstrap/ListGroup';
//import Auth from '../utils/auth'; 
//import { useMutation } from '@apollo/client';
//import { UPDATE_SKILL, UPDATE_EXPERIENCE, UPDATE_AVAILABILITY, UPDATE_PASSWORD } from '../utils/mutations';
//import { Select } from 'react-select';
//must add react-select to package.json dependencies

const UserProfile = ()  => { 

  // create state for holding returned data
  //const [searchedUser, setSearchedUser] = useState([]);
  // create state to hold saved values
 //const [savedExperience, setSavedExperience] = useMutation{UPDATE_EXPERIENCE};
  //const [savedAvailability, setSavedAvailability] = useMutation{UPDATE_AVAILABILITY};
  //const [savedPassword, setSavedPassword] = useMutation{UPDATE_PASSWORD};
//const [showPassword, setPassword]= React.useState({ password: "", showPassword: false,});

  //try {
  //  const response = await search(User);
//  if (!response.ok) {
 //     throw new Error('something went wrong!');
 //   }

 //   const { items } = await response.json();

  //  const userData = items.map((user) => ({
 //     username: user.username,
  //    skills: user.skills || ['None set'],
  //    availability: user.availability || ['None set'],
  //    experience: user.experience || ['None set'],
  //    password: user.password,
  //  }));

  //  setSearchedUser(userData);
  //} catch (err) {
  //  console.error(err);
 // }
 //if  ({user.skills} != null ) {
 //const userSkill = {user.skills}.split(" ", 3);
 //const userSkill1 = userSkill[0];
 //const userSkill2 = userSkill[1];
 //const userSkill3 = userSkill[2]; 
//}
//const [selectedOptions, setSelectedOptions] = useState();
//const optionList = [
//  {value: "HTML/JavaScript", label:"HTML/JavaScript" },
//  {value: "Node/Express", label:"Node/Express" },
//  {value: "Databases", label:"Databases" },
// ];
//function handleSelect(data) {
// setSelectedOptions(data) = useMutation(UPDATE_SKILL);
//}


  return (  
    <div className="UserProfile">  
    <h2 style={{textAlign: "center", color: "#00a5e0", marginBottom: "5px"}}>My Profile</h2> 
    <Container fluid className = "align-items-center" style={{background: "gray", height: "90vh", alignContent: "center"}}> 
    <Row>
      <CardGroup>
      <Card  className="border rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px", margin: "5px"}}>
        <Card.Title className="mb-0 text-center">Skills</Card.Title>
        <Card.Body className="mb-0">
            <ListGroup>
{/*        <ListGroup.Item> {userSkill1}  </ListGroup.Item>
            <ListGroup.Item>  {userSkill2}   </ListGroup.Item>
            <ListGroup.Item> {userSkill3}   </ListGroup.Item>   */}
          </ListGroup>
          </Card.Body>
          <Card.Footer>
            <div className="dropdown-container" style={{width: "10rem", height: "8rem"}}>
                <Select
                   placeholder="Update"
                   options={optionList}
                   value={selectedOptions}
{/*                onChange={handleSelect}  */}   
{/*                    isMulti              */}       
             />
             </div>
          </Card.Footer>
        </Card>
  
        <Card className="border  rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px", margin: "5px"}}>
          <Card.Title className="mb-0 text-center">Experience</Card.Title>
          <Card.Body className="mb-0">
          <  ListGroup>
            <ListGroup.Item> { user.experience } </ListGroup.Item>
            </  ListGroup>
          </Card.Body>
          <Card.Footer><Button variant="primary" className="btn-xs btn-center">Update</Button></Card.Footer>
          </Card>
    
          <Card className="border rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px",  margin: "5px"}}>
            <Card.Title className="mb-0 text-center">Availability</Card.Title>
            <Card.Body className="mb-0">
            <  ListGroup>
            <ListGroup.Item> { user.availability } 
            </ListGroup.Item>
            </  ListGroup>
            </Card.Body>
            <Card.Footer><Button variant="primary" className="btn-xs btn-center">Update</Button></Card.Footer>
            </Card>
            
            <Card className="border rounded card-border-dark" style={{height: "12rem", width: "10rem", color: "#00a5e0", padding: "3px",  margin: "5px"}}>
              <Card.Title className="mb-0 text-center">Password</Card.Title>
              <Card.Body className="mb-0">
              <  ListGroup>
            <ListGroup.Item> xxxxxxx  </ListGroup.Item>
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