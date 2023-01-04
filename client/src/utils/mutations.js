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

// //Mutations for Creating a Random Team!!
// export const CREATE_RANDOM = gql`
//   mutation createTeamsRandom($classId: String!) {
//     createTeamsRandom(classId: $classId) {
//       _id
//       
//   }
// `;