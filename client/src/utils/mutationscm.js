import { gql } from '@apollo/client';

export const  UPDATE_SKILL = gql`
  mutation updateSkill($skills: String!) {
    updateSkill(skills: $skills) {
      _id
      username
      skills
      experience
      availability
      userAvatarId
    }
}
`;

export const  UPDATE_EXPERIENCE = gql`
  mutation updateExperience($experience: String!) {
    updateExperience(experience: $experience) {
      _id
      username
      skills
      experience
      availability
      userAvatarId
    }
}
`;

export const  UPDATE_AVAILABILITY = gql`
  mutation updateAvailability($availability: String!) {
    updateAvailability(availability: $availability) {
      _id
      username
      skills
      experience
      availability
      userAvatarId
    }
}
`;

export const  UPDATE_PASSWORD = gql`
  mutation updatePassword($password: String!) {
    updatePassword(password: $password) {
      _id
      username
      password
    }
}
`;

export const  UPDATE_AVATAR = gql`
  mutation updateAvatar($userAvatarId: String!) {
    updateAvatar(userAvatarId: $userAvatarId) {
      _id
      userAvatarId
    }
}
`;