const describe =require('mocha').describe
const it =require('mocha').it
const chai = require('chai')
const assert = require('chai').assert
const schema = require('../src/schema')

chai.should()

describe('Test Static Schema Snapshot', () => {
    
    it('schema should contain types', () => {
      assert.isNotNull(schema.getType("Idea"))
      assert.isDefined(schema.getType("Idea"))
      assert.isNotNull(schema.getType("User"))
      assert.isDefined(schema.getType("User"))
    })
    
    it('scheme should not contain unregistered types', () => {
      assert.isUndefined(schema.getType("NotADefinedType", "Type should not be defined"))
    })
})