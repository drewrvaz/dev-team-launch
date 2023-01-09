import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { GET_USER } from '../utils/queries';
import {ADD_AVAILABILITY} from '../utils/mutations';
import {ADD_EXPERIENCE} from '../utils/mutations';
import {ADD_SKILLS} from '../utils/mutations';
import {ADD_AVATAR} from '../utils/mutations';

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

const ViewEditProfileAttibutes = () =>  {

  const [userAvailability, setUserAvailability] = useState({ availability: null});
  const [userExperience, setUserExperience] = useState({ experience: null});
  const [userSkills, setUserSkills] = useState({ skills: []});
  const [userAvatar, setUserAvatar] = useState({ userAvatarId: "faRobot"});
  const [userData, setUserData] = useState({
    username: "",
  });
  const [addAvailability, { availabilityError, availabilityData }] = useMutation(ADD_AVAILABILITY);
  const [addExperience, { experienceError, experienceData }] = useMutation(ADD_EXPERIENCE);
  const [addSkills, { skillsError, skillsData }] = useMutation(ADD_SKILLS);
  const [addAvatar, { avatarError, avatarData }] = useMutation(ADD_AVATAR);

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

    setUserAvailability({availability: data.user.availability});
    setUserExperience({experience: data.user.experience});
    setUserSkills({skills: data.user.skills});
    setUserAvatar({userAvatarId: data.user.userAvatarId});
    
  }
    
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const handleAvailabilityChange = (event) => {
    const { value } = event;
    setUserAvailability({ ...userAvailability, availability: value });
    console.log(value);
  };

  const handleExperienceChange = (event) => {
    const { value } = event;
    setUserExperience({ ...userExperience, experience: value });
    console.log(value);
  };

  const handleSkillsFrontendChange = (event) => {
    let currentSkills = [];
    if (event.target.checked && !userSkills.skills.includes('Frontend')) currentSkills = [...userSkills.skills, 'Frontend'];
    else if (!event.target.checked && userSkills.skills.includes('Frontend')) {
      const index = array.indexOf('Frontend');
      if (index > -1) { 
        array.splice(index, 1); 
      }
      currentSkills = userSkills.skills.splice(index,1)
    }
    else {
      currentSkills = [...userSkills.skills]
    }

    setUserSkills({ ...userSkills, skills: currentSkills });
  };

  const handleSkillsBackendChange = (event) => {
    let currentSkills = [];
    if (event.target.checked && !userSkills.skills.includes('Backend')) currentSkills = [...userSkills.skills, 'Backend'];
    else if (!event.target.checked && userSkills.skills.includes('Backend')) {
      const index = array.indexOf('Backend');
      if (index > -1) { 
        array.splice(index, 1); 
      }
      currentSkills = userSkills.skills.splice(index,1)
    }
    else {
      currentSkills = [...userSkills.skills]
    }

    setUserSkills({ ...userSkills, skills: currentSkills });
  };

  const handleSkillsDatabaseChange = (event) => {
    let currentSkills = [];
    if (event.target.checked && !userSkills.skills.includes('Database')) currentSkills = [...userSkills.skills, 'Database'];
    else if (!event.target.checked && userSkills.skills.includes('Database')) {
      const index = array.indexOf('Database');
      if (index > -1) { 
        array.splice(index, 1); 
      }
      currentSkills = userSkills.skills.splice(index,1)
    }
    else {
      currentSkills = [...userSkills.skills]
    }

    setUserSkills({ ...userSkills, skills: currentSkills });
  };

  const handleSkillsInfrastructureChange = (event) => {
    let currentSkills = [];
    if (event.target.checked && !userSkills.skills.includes('Infrastructure')) currentSkills = [...userSkills.skills, 'Infrastructure'];
    else if (!event.target.checked && userSkills.skills.includes('Infrastructure')) {
      const index = array.indexOf('Infrastructure');
      if (index > -1) { 
        array.splice(index, 1); 
      }
      currentSkills = userSkills.skills.splice(index,1)
    }
    else {
      currentSkills = [...userSkills.skills]
    }

    setUserSkills({ ...userSkills, skills: currentSkills });
  };

  const handleAvatarChange = (event) => {
    const { value } = event;
    setUserAvatar({ ...userAvatar, userAvatarId: value});
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(userData.username);
      const { experienceData } = await addExperience({
        variables: { username: userData.username, experience: userExperience.experience },
      });

      const { availabilityData } = await addAvailability({
        variables: { username: userData.username, availability: userAvailability.availability },
      });

      const { skillsData } = await addSkills({
        variables: { username: userData.username, skills: userSkills.skills },
      });

      //Add Avatar Later
      const { avatarData } = await addAvatar({
        variables: { username: userData.username, userAvatarId: "faRobot" },
      });


    } catch (err) {
      console.error(err);
    }

    setUserData({
      username: userData.username,
      availability: userAvailability.availability,
      experience: userExperience.experience,
      skills: userSkills.skills,
      avatar: userAvatar.avatar,
    });
  };

    return (

        <Container className="mt-5 p-3 border border-dark rounded bg-light " style={divStyle}>
          <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="avatars">
              <Container className="d-flex justify-content-center fs-4 fw-italic"> <span>{userData.username}</span> </Container>
              <Container className="d-flex justify-content-center">
                <FontAwesomeIcon icon={optionsAvatar[2].value} className="p-2 border rounded text-white border-black bg-black mb-2" style={{fontSize: 72}}/>
              </Container>
              <Form.Label className="fw-bold">Avatars</Form.Label>              
              <Select name="avatar" options={optionsAvatar} defaultValue={optionsAvatar[2]} onChange={handleAvatarChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="availability">
              <Form.Label className="fw-bold">Availability</Form.Label>
              <Select name="availability" options={optionsAvailability} defaultValue={optionsAvailability[userData.availability - 1]} onChange={handleAvailabilityChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="experience">
              <Form.Label className="fw-bold">Experience</Form.Label>
              <Select name="experience" options={optionsExperience} defaultValue={optionsExperience[userData.experience - 1]} onChange={handleExperienceChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox" id="">
            <Form.Label className="fw-bold">Skills:</Form.Label>
              <Container className="ml-3">
                <Row>
                  <Col>
                  <Form.Check type="checkbox" label="Frontend" defaultChecked={!!userData.skills?.includes('Frontend')} onClick={handleSkillsFrontendChange}/>
                  </Col>
                  <Col>
                  <Form.Check className="ml-3"type="checkbox" label="Backend" defaultChecked={!!userData.skills?.includes('Backend')} onChange={handleSkillsBackendChange}/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <Form.Check type="checkbox" label="Database" defaultChecked={!!userData.skills?.includes('Database')} onClick={handleSkillsDatabaseChange}/>
                  </Col>
                  <Col>
                  <Form.Check className="ml-3"type="checkbox" label="Infrastructure" defaultChecked={!!userData.skills?.includes('Infrastructure')} onClick={handleSkillsInfrastructureChange}/>
                  </Col>
                </Row>
              </Container>
            </Form.Group>
            <Container className="d-flex justify-content-center mt-4">
            <Button variant="primary" type="submit">
                Update Profile
            </Button>
            </Container>

          </Form>
        </Container>

    )
}

export default ViewEditProfileAttibutes;