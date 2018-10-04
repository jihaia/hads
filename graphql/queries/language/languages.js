import {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import LanguageType from '../../types/language.js';
  
  export default {
    type: new GraphQLList(LanguageType),
    args: {
      limit: {
        type: GraphQLInt,
        description: 'Limits the number of results returned in the page. Defaults to 10.',
      },
      offset: {
        type: GraphQLInt,
      },
    },
    resolve(root, args) {
      const offset = args.offset || 0;
      const limit = args.limit || 10;
      delete args.offset;
      delete args.limit;
      return models.language.findAll({where: args, include: [], offset, limit });
    }
  };
  