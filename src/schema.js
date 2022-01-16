const {makeExecutableSchema } = require('@graphql-tools/schema')
const fs = require('fs')
const path = require('path')
const resolvers = require('./index')

const typeDefs = fs.readFileSync(path.join(__dirname, '.', 'schema.graphql'), 'utf8')
// Put together a schema

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema, typeDefs;