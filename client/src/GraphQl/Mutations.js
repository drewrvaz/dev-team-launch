import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql `

mutation addClass(
    $name: String! 
    $leadId: String!) {

    addClass(
        name: $name 
        leadID: $leadID
        ) {
            // This is what happens after the mutation is done
            id
            name
            leadID

    }
}
`