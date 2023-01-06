import { gql } from '@apollo/client';

export const LOAD_USERS = gql`
query Query {
    users {
      _id
      availability
      email
      experience
      inviteIds
      password
      skills
      userAvatarId
      username
    }
  }
`
export const LOAD_CLASSES = gql`
query Query {
  allClasses {
    userIds
    teamSize
    teamIds
    name
    leadId
    inviteIds
    description
    classSize
    classAvatarId
    _id
  }
}
`
export const LOAD_TEAMS = gql`
query Query($teamId: ID!) {
  team(teamId: $teamId) {
    userIds
    name
    classId
    _id
  }
}
`