import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import {useState} from 'react';
import { GET_USER } from '../utils/queries';
import {ADD_AVAILABILITY} from '../utils/mutations';

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

const divStyle = {
  maxWidth: '500px',
  fontFamily: 'Arial',
};

const EditAvatar = () =>  {

  const [userAvailability, setUserAvailability] = useState({ availability: null});

  const [userData, setUserData] = useState({
    username: "",
  });

  const { loading, data } = useQuery(GET_USER, {
    variables: {username: Auth.getProfile().data.username}
  });

  const [addAvailability, { error, availabilityData }] = useMutation(ADD_AVAILABILITY);
    
  if (data && userData.username === "") {

    setUserData({
      username: data.user.username,
      _id: data.user._id,
      skills: data.user.skills,
      availability: data.user.availability,
      experience: data.user.experience,
    });
    
  }
    
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const handleAvailabilityChange = (event) => {
    console.log(event);
    // const { name, value } = event.target;
    // setUserAvailability({ ...userAvailability, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      const { data } = await addAvailability({
        variables: { ...userAvailability },
      });
    } catch (err) {
      console.error(err);
    }

    // console.log(data);

    setUserAvailability({
      availability: userData.availability
    });
  };

    return (
        <Container className="mt-5 p-3 border border-dark rounded bg-light " style={divStyle}>
          <Form>
          <Container className="d-flex justify-content-center fs-5 fw-italic"> <span>{userData.username}</span> </Container>
          <Container className="d-flex justify-content-center">
            <FontAwesomeIcon icon={optionsAvatar[2].value} className="p-2 border rounded text-white border-black bg-black mb-2" style={{fontSize: 72}}/>
          </Container>
            <Form.Group className="mb-3" controlId="editAvatar">
              <Form.Label className="fw-bold">Avatars</Form.Label>
              {/* Edit the Default Value defaultValue={optionsAvailability[userData.availability - 1]}*/}
              <Select name="availability" options={optionsAvatar}/>
            </Form.Group>
            <Container className="d-flex justify-content-center mt-4">
            <Button variant="primary" type="submit">
                Save
            </Button>
            </Container>
           
          </Form>
        </Container>
        
    )
}

export default EditAvatar;