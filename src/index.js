const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('.prisma/client');



const resolvers = {
  Query: {
    ideas: async (parent, args, context) => {
      return context.prisma.idea.findMany()
    }
  },

  Mutation: {
    post: (parent, args, context) => {
      const newIdea = context.prisma.idea.create({
        data:{
          type: args.type,
          name: args.name,
          description: args.description,
        },
      })
      return newIdea
    }
  },
}

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context:{
    prisma,
  }
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
);