import { gql } from 'apollo-boost';

const getVolunteersQuery = gql`
    {
        volunteers {
            name
            sit_rating
            lay_down_rating
            walk_on_leash_rating
            sit_in_crate_rating
            comment
        }
    }
`

const getDogsQuery = gql`
    {
        dogs {
            id
            name
            size
            age
            gender

        }
    }
`

export { getDogsQuery, getVolunteersQuery };