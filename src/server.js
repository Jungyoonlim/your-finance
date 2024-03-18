const { ApolloServer, gql } = require('apollo-server');

// Define your GraphQL schema
const typeDefs = gql`
  type Transaction {
    id: ID!
    amount: Float!
    description: String!
    date: String!
  }

  type Query {
    transactions: [Transaction]
  }
`;

// Define dummy data
const transactions = [
  { 
    id: '1', 
    amount: 100.50, 
    description: 'Grocery shopping', 
    date: '2023-03-15' 
},
  { id: '2', 
  amount: -25.75, 
  description: 'Coffee shop', 
  date: '2023-03-16' 
},
  // Add more dummy transactions as needed
];

// Define resolvers
const resolvers = {
  Query: {
    transactions: () => transactions,
  },
};

// Create the GraphQL server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`GraphQL server running at ${url}`);
});