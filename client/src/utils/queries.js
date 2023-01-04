import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

//Qeuries based on activity 26 in lesson 21 MERN
//Query Classes (Based on typeDefs)
export const QUERY_CLASSES = gql`
  query getClasses {
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
  query getSingleClass($classId: ID!) {
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
  query getTeams {
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
    team(teamId: $teamId) {
      _id
      name
      classId
      userIds
    }
  }
`;

