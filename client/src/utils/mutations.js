import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//creating a class
export const CREATE_CLASS = gql`
  mutation createClass($name: String!, $username:String!, $description:String, $classSize:Int, $teamSize:Int) {
    createClass(name: $name, username: $username, description: $description, classSize: $classSize, teamSize: $teamSize) {
      _id:
      name
      leadId
      description
      userIds
      teamIds
      teamSize
      classSize
    }
  }
`;
//Mutations for Creating a Random Team!!
export const CREATE_RANDOM = gql`
  mutation createTeamsRandom($classname: String!) {
    createTeamsRandom(classname: $classname) {
      _id
      name
    }
  }
`;

export const CREATE_CRITERIA = gql`
  mutation createTeamsCriteria($classname: String!) {
    createTeamsCriteria(classname: $classname) {
      _id
      name
    }
  }
`;

export const ADD_AVAILABILITY = gql`
  mutation addUserAvailability($username: String!, $availability: Int!) {
    addUserAvailability(username: $username, availability: $availability){
      username
      availability
    } 
  }
`;

export const ADD_EXPERIENCE = gql`
  mutation addUserExperience($username: String!, $experience: Int!) {
    addUserExperience(username: $username, experience: $experience){
      username
      experience
    } 
  }
`;

export const ADD_SKILLS = gql`
  mutation addUserSkills($username: String!, $skills: [String!]) {
    addUserSkills(username: $username, skills: $skills){
      username
      skills
    } 
  }
`;

export const ADD_AVATAR = gql`
  mutation addUserAvatar($username: String!, $userAvatarId: String!) {
    addUserAvatar(username: $username, userAvatarId: $userAvatarId){
      username
      userAvatarId
    } 
  }
`;

export const ADD_USER_TO_CLASS = gql`
  mutation addUserToClass($classname: String!, $username: String!) {
    addUserToClass(classname: $classname, username: $username){
      _id
      name
      leadId
      description
      userIds
      teamIds
      teamSize
      classSize
    } 
  }
`;

export const ADD_SEARCH_USERS = gql`
  mutation searchUsers($username: String!) {
    searchUsers(username: $username){
      _id
      username
    } 
  }
`;

export const ADD_SEARCH_TEAMS = gql`
  mutation searchTeams($name: String!) {
    searchTeams(name: $name){
      _id
      name
    } 
  }
`;

