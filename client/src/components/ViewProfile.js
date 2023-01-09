import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import {useState} from 'react';
import { GET_USER } from '../utils/queries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, 
         faAnchor, 
        faRobot,
        faStarAndCrescent,
        faSatellite,
        faBicycle,
        faRainbow,
        faSprayCanSparkles,
        faDragon,
        faKiwiBird,
        faFeatherPointed,
        faGasPump,
        faMoon,
        faShieldDog,
        faMagicWandSparkles,
        faBridge,
        faDog,
        faTruckFast,
        faPuzzlePiece,
        faPeace,
        faJetFighter,
        faJedi,
        faCoffee,
        faRecordVinyl,
        faBowlingBall,
        faQuidditchBroomBall
        } from '@fortawesome/free-solid-svg-icons';


const optionsAvatar = [
  { value: faAmbulance, label: "faAmbulance"},
  { value: faAnchor, label: "faAnchor"},
  { value: faRobot, label: "faRobot"},
  { value: faStarAndCrescent, label: "faStarAndCrescent"},
  { value: faSatellite, label: "faSatellite"},
  { value: faBicycle, label:" faBicycle"},
  { value: faRainbow, label: "faRainbow"},
  { value: faSprayCanSparkles, label: "faSprayCanSparkles"},
  { value: faDragon, label: "faDragon"},
  { value: faKiwiBird, label: "faKiwiBird"},
  { value: faFeatherPointed, label: "faFeatherPointed"},
  { value: faGasPump, label: "faGasPump"},
  { value: faMoon, label: "faMoon"},
  { value: faShieldDog, label: "faShieldDog"},
  { value: faMagicWandSparkles, label: "faMagicWandSparkles"},
  { value: faBridge, label: "faBridge"},
  { value: faDog, label: "faDog"},
  { value: faTruckFast, label: "faTruckFast"},
  { value: faPuzzlePiece, label: "faPuzzlePiece"},
  { value: faPeace, label: "faPeace"},
  { value: faJetFighter, label: "faJetFighter"},
  { value: faJedi, label: "faJedi"},
  { value: faCoffee, label: "faCoffee"},
  { value: faRecordVinyl, label: "faRecordVinyl"},
  { value: faBowlingBall, label: "faBowlingBall"},
  { value: faQuidditchBroomBall, label: "faQuidditchBroomBall"},
]
const optionsAvailability = [
  { value: '1', label: 'Low' },
  { value: '2', label: 'Medium' },
  { value: '3', label: 'High' },
]

const optionsExperience = [
  { value: '1', label: 'None' },
  { value: '2', label: 'Some' },
  { value: '3', label: 'A Lot' },
]

const divStyle = {
  maxWidth: '500px',
  fontFamily: 'Arial',
};

const ViewProfile = () =>  {

    const [userData, setUserData] = useState({
        username: "",
      });
    
      const { loading, data } = useQuery(GET_USER, {
        variables: {username: Auth.getProfile().data.username}
      });
      
    
      if (data && userData.username === "") {
    
        setUserData({
          username: data.user.username,
          _id: data.user._id,
          skills: data.user.skills,
          availability: data.user.availability,
          experience: data.user.experience,
        });
        console.log(faAmbulance);
    
      }
      // console.log(optionsAvatar);
      if (loading) {
        return <h2>LOADING...</h2>;
      }

    return (

        <Container className="mt-5 p-3 border border-dark rounded bg-light " style={divStyle}>
          <Form>
            <Form.Group className="mb-3" controlId="avatars">
              <Container className="d-flex justify-content-center fs-4 fw-italic"> <span>{userData.username}</span> </Container>
              <Container className="d-flex justify-content-center">
                <FontAwesomeIcon icon={optionsAvatar[2].value} className="p-2 border rounded text-white border-black bg-black mb-2" style={{fontSize: 72}}/>
              </Container>
              <Form.Label className="fw-bold">Avatars</Form.Label>              
              <Select name="selectAvatars" options={optionsAvatar} defaultValue={optionsAvatar[2]} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="availability">
              <Form.Label className="fw-bold">Availability</Form.Label>
              <Select name="selectAvailability" options={optionsAvailability} defaultValue={optionsAvailability[userData.availability - 1]}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="experience">
              <Form.Label className="fw-bold">Experience</Form.Label>
              <Select name="selectExperience" options={optionsExperience} defaultValue={optionsExperience[userData.experience - 1]}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox" id="">
            <Form.Label className="fw-bold">Skills:</Form.Label>
              <Container className="ml-3">
                <Row>
                  <Col>
                  <Form.Check type="checkbox" label="Frontend" defaultChecked={userData.skills?.includes('Frontend')}/>
                  </Col>
                  <Col>
                  <Form.Check className="ml-3"type="checkbox" label="Backend" defaultChecked={userData.skills?.includes('Backend')}/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <Form.Check type="checkbox" label="Database" defaultChecked={userData.skills?.includes('Database')}/>
                  </Col>
                  <Col>
                  <Form.Check className="ml-3"type="checkbox" label="Infrastructure" defaultChecked={userData.skills?.includes('Infrastructure')}/>
                  </Col>
                </Row>
              </Container>
              
            </Form.Group>
          </Form>
        </Container>

    )
}

export default ViewProfile;