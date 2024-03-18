const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const path = require('path'); 

const typeDefs = gql`
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

const user = {
  accounts: [
    { id: '1', name: 'Checking', balance: 1500 },
    { id: '2', name: 'Savings', balance: 5000 },
  ],
  transactions: [
    { id: '1', date: '2023-05-01', description: 'Grocery Shopping', amount: -100, category: 'Food' },
    { id: '2', date: '2023-05-02', description: 'Gas Station', amount: -50, category: 'Transportation' },
  ],
  investments: [
    { id: '1', name: 'Stocks', value: 10000 },
    { id: '2', name: 'Bonds', value: 5000 },
  ],
};

const resolvers = {
  Query: {
    user: () => user,
    transactions: () => user.transactions,
  },
};

const startServer = async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();

  const app = express();
  apolloServer.applyMiddleware({ app });

  app.use(express.static(path.join(__dirname, '../build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();