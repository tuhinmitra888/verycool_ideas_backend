const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');


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

  Mutation: {
    post: (parent, args) => {
    let idCount = ideas.length
       const idea = {
        id: `idea-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      ideas.push(idea)
      return idea
    }
  },
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
);