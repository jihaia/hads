import {
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import models from '../../../models/index.js';
import PersonType from '../../types/person.js';

export default {
  type: new GraphQLList(PersonType),
  args: {
    limit: {
      type: GraphQLInt,
      description: 'Limits the number of results returned in the page. Defaults to 10.',
    },
    offset: {
      type: GraphQLInt,
    },
    search: {
      type: GraphQLString
    },
    sorters: {
      type: new GraphQLList(GraphQLString),
      description: 'A list of sorting rules to be applied to the request.'
    }
  },
  resolve(root, args) {
    const offset = args.offset || 0;
    const limit = args.limit || 10;
    delete args.offset;
    delete args.limit;
    return models.person.findAll({where: args, include: [], offset, limit });
  }
};
