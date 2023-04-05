var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');


// Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type RandomDie {
//     numSides: Int!
//     rollOnce: Int!
//     roll(tries: Int!): [Int]
//   }

//   type Query {
//     hello: String
//     give: Int
//     rollDice(numDice: Int): [Int]
//     getDie(numSides: Int): RandomDie
//   } 
// `);

var schema = buildSchema(schemaString)

class RandomDie {
  constructor(numSides) {
    this.numSides = numSides
  }

  rollOnce() {
    return Math.floor(Math.random()*this.numSides)
  }

  roll({tries}) {
    const output = Array(tries).fill(0).map(() => {
      return Math.floor(Math.random()*this.numSides)
    })
    return output
  }
}

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  give: () => {
    return 123;
  },
  rollDice: (args) => {
    var result = []
    for (var x = 0; x < args.numDice; x++) {
      result.push(Math.floor(Math.random()*6))
    }
    return result
  },
  getDie: ({numSides}) => {
    return new RandomDie(numSides || 6)
  }
};

var app = express();
const cors = require('cors');
const { schemaString } = require('./types');
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
