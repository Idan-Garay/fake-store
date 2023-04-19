import fetch from 'node-fetch'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { schemaString } from './types.js'
import cors from 'cors'
import * as jose from 'jose'

var schema = buildSchema(schemaString)

// The root provides a resolver function for each API endpoint
var root = {
  authToken: async({email, password}) => {
    const alg = 'HS256'
    const secret = new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2')
    console.log(secret)
    const jwt = await new jose.SignJWT({
      email: email,
      password: password,
      message: 'This is authenticated via jwt by Idan',
    })
    .setProtectedHeader({alg})
    .setExpirationTime('2h')
    .sign(secret)

    return jwt
  },
  product: async ({ id }) => {
    const res = await fetch('https://fakestoreapi.com/products/' + id)
    const data = await res.json()
    return data
  },
  products: async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
  },
  categories: async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const data = await res.json()
    return data
  }
};

var app = express();

app.use(cors({
  // origin: '*',
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
