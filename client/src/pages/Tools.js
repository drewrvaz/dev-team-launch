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
import RandomHuman from '../pages/Random/Random';
import TeamSearch from '../components/TeamSearch';
import UserSearch from '../components/UserSearch';

const divStyle = {
  maxWidth: '500px',
  fontFamily: 'Arial',
};

const Tools = () =>  {

  const [isRandomHumanPickerShown, setIsRandomHumanPickerShown] = useState(true);
  const [isUserSearchShown, setIsUserSearchShown] = useState(false);
  const [isTeamSearchShown, setIsTeamSearchShown] = useState(false);

  const displayRandomTeamGenerator = event => {
    // 👇️ toggle visibility
    setIsRandomHumanPickerShown(true);
    setIsUserSearchShown(false);
    setIsTeamSearchShown(false);
    
  };

  const displayUserSearch = event => {
    // 👇️ toggle visibility
    setIsRandomHumanPickerShown(false);
    setIsUserSearchShown(true);
    setIsTeamSearchShown(false);
  };

  const displayTeamSearch = event => {
    // 👇️ toggle visibility
    setIsRandomHumanPickerShown(false);
    setIsUserSearchShown(false);
    setIsTeamSearchShown(true);
  };



return (

// Is this for manage users breadcrumb/page?

  <Container>
{/* Breadcrumbs for what Modal to display when clicked */}
  <Col>
    <Row className="d-flex justify-content-center">
    <Breadcrumb className="d-flex justify-content-center">
      {/* When I click here I am taken to the invites page */}
      <Breadcrumb.Item onClick={displayRandomTeamGenerator}>
        Random Human Picker
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayUserSearch}>
        Search for User
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayTeamSearch}>
        Team Search
      </Breadcrumb.Item>
    </Breadcrumb>
    </Row>
    <Row  className="justify-content-center"  style={{display: isRandomHumanPickerShown?  'block' : 'none'}}>
      <RandomHuman />
    </Row>
    <Row  className="justify-content-center"  style={{display: isUserSearchShown ?  'block' : 'none'}}>
      <UserSearch />
    </Row>
    <Row  className="justify-content-center"  style={{display: isTeamSearchShown ?  'block' : 'none'}}>
      <TeamSearch />
    </Row>
  </Col>
 
  
  </Container>


);

}
export default Tools;