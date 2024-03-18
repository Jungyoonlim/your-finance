import { gql } from '@apollo/client';

export const USER_DATA_QUERY = gql`
  type Account {
    id: ID!
    name: String!
    balance: Float!
  }

  type Transaction {
    id: ID!
    amount: Float!
    description: String!
    date: String!
    category: String!
  }

  type Investment {
    id: ID!
    name: String!
    value: Float!
  }

  type User {
    accounts: [Account]
    transactions: [Transaction]
    investments: [Investment]
  }

  type Query {
    user: User
    transactions: [Transaction]
  }
`;