import fetch from 'node-fetch'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { schemaString } from './types.js'
import cors from 'cors'

var schema = buildSchema(schemaString)

// The root provides a resolver function for each API endpoint
var root = {
  product: async ({ id }) => {
    const res = await fetch('https://fakestoreapi.com/products/' + id)
    const data = await res.json()
    return data
  }
};

var app = express();

app.use(cors({
  origin: true,
  credentials: true
}))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
