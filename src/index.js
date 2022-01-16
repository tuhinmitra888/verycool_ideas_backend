const fs = require('fs')
const path = require('path')
const { ApolloServer } = require('apollo-server')
const { PrismaClient } = require('.prisma/client')
const {getUserId} = require('./utils')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Idea = require('./resolvers/Idea')

const resolvers = {
  Query,
  Mutation,
  User,
  Idea
}

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId:
        req && req.headers.authorization
          ? getUserId(req)
          : null
    };
  }
})

server.listen().then(({ url }) => console.log(`Server is running on ${url}`))

module.exports = resolvers;