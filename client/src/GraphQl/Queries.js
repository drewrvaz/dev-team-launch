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