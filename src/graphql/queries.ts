import { gql } from '@apollo/client';

export const USER_DATA_QUERY = gql`
  query GetUserData {
    user {
      accounts {
        id
        name
        balance
      }
      transactions {
        id
        date
        description
        amount
        category
      }
      investments {
        id
        name
        value
      }
    }
  }
`;