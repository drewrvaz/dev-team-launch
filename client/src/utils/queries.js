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
export const GET_CLASSES = gql`
query Query {
  allClasses {
    userIds
    teamSize
    teamIds
    name
    leadId
    inviteIds
    classAvatarId
    classSize
    description
    _id
  }
}
`;
//Query Class (Based on typeDefs)
export const GET_SINGLE_CLASS = gql`
query Query($classId: ID!) {
  singleClass(classId: $classId) {
    name
    userIds
    teamSize
    teamIds
    leadId
    inviteIds
    description
    classSize
    classAvatarId
    _id
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

