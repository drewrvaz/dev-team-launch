import { gql } from '@apollo/client';

export const GET_ME = gql`
    query mev{
        mev{
            _id
            username
            email 
            password
            skills
            availability
            experience
            avatar-id
        }
    }
`;