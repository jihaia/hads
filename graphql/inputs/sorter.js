import {
    GraphQLInputObjectType,
    GraphQLString,
  } from 'graphql';
  
  export default new GraphQLInputObjectType({
    name: 'sorter',
    fields: () => ({
        attributeName: { type: GraphQLString },
        direction: { type: GraphQLString },
    })
  });