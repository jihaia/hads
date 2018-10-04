const GraphQL = require('graphql')
const GraphQLSchema = GraphQL.GraphQLSchema
const GraphQLObjectType = GraphQL.GraphQLObjectType
const queries = require('./queries')

// Define the GraphQL Schema
module.exports = new GraphQLSchema({
    description: 'Remax HADS Microservice',

    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries,
        description: 'Remax HADS Microservice queries provide access to the underlying profile data.',
        title: 'hello motto'
    })
})