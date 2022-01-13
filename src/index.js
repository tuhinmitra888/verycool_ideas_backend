const { ApolloServer } = require('apollo-server');

const typeDefs = `
  type Query {
    ideas: [Idea!]!
  }

  type Idea{
      id: ID!
      type: String!
      name: String!
      description: String!
  }
`
let ideas = [{
  id: 'idea-0',
  type: 'Hustle-Ideas',
  name: 'weekend-food-truck',
  description: 'feed them all'  
}]

const resolvers = {
  Query: {
    ideas: () => ideas
  },
  Idea:{
    id: (parent) => parent.id,
    type: (parent) => parent.type,
    name: (parent) => parent.name,
    description: (parent) => parent.description,
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );