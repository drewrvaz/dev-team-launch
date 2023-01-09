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

import ViewProfile from '../components/ViewProfile';
import EditAvatar from '../components/EditAvatar';
import UpdateAvailability from '../components/UpdateAvailability';
import ModifyExperience from '../components/ModifyExperience';
import ChangePassword from '../components/ChangePassword';
import AdjustSkills from '../components/AdjustSkills';


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

const saveProfile = event => {
  console.log(event.target);
};

const Profile = () =>  {
  const [isViewProfileShown, setIsViewProfileShown] = useState(true);
  const [isEditAvatarShown, setIsEditAvatarShown] = useState(false);
  const [isUpdateAvailabilityShown, setIsUpdateAvailabilityShown] = useState(false);
  const [isModifyExperienceShown, setIsModifyExperienceShown] = useState(false);
  const [isChangePasswordShown, setIsChangePasswordShown] = useState(false);
  const [isAdjustSkillsShown, setIsAdjustSkillsShown] = useState(false);

  const displayViewProfile = event => {
    // 👇️ toggle visibility
    setIsViewProfileShown(true);
    setIsEditAvatarShown(false);
    setIsUpdateAvailabilityShown(false);
    setIsModifyExperienceShown(false);
    setIsChangePasswordShown(false);
    setIsAdjustSkillsShown(false);
  };

  const displayEditAvatar = event => {
    // 👇️ toggle visibility
    setIsViewProfileShown(false);
    setIsEditAvatarShown(true);
    setIsUpdateAvailabilityShown(false);
    setIsModifyExperienceShown(false);
    setIsChangePasswordShown(false);
    setIsAdjustSkillsShown(false);
  };

  const displayUpdateAvailability = event => {
    // 👇️ toggle visibility
    setIsViewProfileShown(false);
    setIsEditAvatarShown(false);
    setIsUpdateAvailabilityShown(true);
    setIsModifyExperienceShown(false);
    setIsChangePasswordShown(false);
    setIsAdjustSkillsShown(false);
  };

  const displayModifyExperience = event => {
    // 👇️ toggle visibility
    setIsViewProfileShown(false);
    setIsEditAvatarShown(false);
    setIsUpdateAvailabilityShown(false);
    setIsModifyExperienceShown(true);
    setIsChangePasswordShown(false);
    setIsAdjustSkillsShown(false);
  };

  const displayChangePassword = event => {
    // 👇️ toggle visibility
    setIsViewProfileShown(false);
    setIsEditAvatarShown(false);
    setIsUpdateAvailabilityShown(false);
    setIsModifyExperienceShown(false);
    setIsChangePasswordShown(true);
    setIsAdjustSkillsShown(false);
  };

  const displayAdjustSkills = event => {
    // 👇️ toggle visibility
    setIsViewProfileShown(false);
    setIsEditAvatarShown(false);
    setIsUpdateAvailabilityShown(false);
    setIsModifyExperienceShown(false);
    setIsChangePasswordShown(false);
    setIsAdjustSkillsShown(true);
  };

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

  }

  if (loading) {
    return <h2>LOADING...</h2>;
  }

return (
  <Col >
    <Row className="profilePageLinks d-flex justify-content-center" >
    <Breadcrumb className="d-flex justify-content-center">
      <Breadcrumb.Item onClick={displayViewProfile}>
        View
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayEditAvatar}>
        Edit Avatar
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayUpdateAvailability}>
        Update Availability
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayModifyExperience}>
        Modify Experience
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayChangePassword}>
        Change Password
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={displayAdjustSkills}>
        Adjust Skills
      </Breadcrumb.Item>
    </Breadcrumb>
    </Row>

    <Row  className="justify-content-center" style={{display: isViewProfileShown ?  'block' : 'none'}}>
      <ViewProfile />
    </Row>
    <Row  className="justify-content-center"style={{display: isEditAvatarShown ?  'block' : 'none'}}>
      <EditAvatar />
    </Row>
    <Row  className="justify-content-center" style={{display: isUpdateAvailabilityShown ?  'block' : 'none'}}>
      <UpdateAvailability />
    </Row>
    <Row  className="justify-content-center" style={{display: isModifyExperienceShown ?  'block' : 'none'}}>
      <ModifyExperience />
    </Row>
    <Row  className="justify-content-center" style={{display: isChangePasswordShown ?  'block' : 'none'}}>
      <ChangePassword />
    </Row>
    <Row  className="justify-content-center" style={{display: isAdjustSkillsShown ?  'block' : 'none'}}>
      <AdjustSkills />
    </Row>
  </Col>

);

}
export default Profile;