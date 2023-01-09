import { gql } from 'graphql-tag';

export const GET_USER = gql`
query user($username: String!) {
  user(username: $username) {
      _id
      username
      email
      skills
      availability
      experience
      userAvatarId
      inviteIds
    }
  }
`;

//Qeuries based on activity 26 in lesson 21 MERN
//Query Classes (Based on typeDefs)
export const QUERY_CLASSES = gql`
  query classes {
    classes {
      _id
      name
      leadId
      description
      userIds
      teamIds
      inviteIds
      classAvatarId
    }
  }
`;
//Query Class (Based on typeDefs)
export const QUERY_SINGLE_CLASS = gql`
  query class($classId: ID!) {
    class(classId: $classId) {
      _id
      name
      leadId
      description
      userIds
      teamIds
      inviteIds
      classAvatarId
    }
  }
`;
//Query Teams (Based on typeDefs)
export const QUERY_TEAMS = gql`
  query team {
    team {
      _id
      name
      classId
      userIds
    }
  }
`;
//Query Team (Based on typeDefs)
export const QUERY_SINGLE_TEAM = gql`
  query getSingleTeam($teamId: ID!) {
    team(teamId: $teamID) {
      _id
      name
      classId
      userIds
    }
  }
`;

//Query Class (Based on typeDefs)
export const GET_MY_CLASSES = gql`
  query myClasses($username: String!) {
    myClasses(username: $username) {
      _id
      name
      leadId
      description
      userIds
      teamIds
      inviteIds
      classAvatarId
    }
  }
`;


