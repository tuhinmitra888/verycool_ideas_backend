const describe = require('mocha').describe
const it = require('mocha').it
const before = require('mocha').before
const resolvers = require('../src/index')
const typeDefs = require('../src/schema')
const ideas = require('../src/models')
const EasyGraphQLTester = require('easygraphql-tester')


describe('Test Queries', () => {
  let tester

  before(() => {
    tester = new EasyGraphQLTester(typeDefs, resolvers)
  })
  
  it('Should pass if the query is valid', () => {
    const validQuery = `
    {
      ideas {
        name
      }
    }
    `
    tester.test(true, validQuery, {
      ideas: ideas
    })
  })

  it('Should fail if the query is invalid', () => {
    const invalidQuery = `
    {
      ideas {
        # Invalid field name!
        invalidField
      }
    }
    `
    tester.test(false, invalidQuery)
  })
})
