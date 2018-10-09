const GraphQL = require('graphql')
const GraphQLList = GraphQL.GraphQLList
const GraphQLString = GraphQL.GraphQLString
const GraphQLInt = GraphQL.GraphQLInt

const Models = require('../../../models/index.js')
const LanguageType = require('../../types/language.js')

module.exports = {
  type: new GraphQLList(LanguageType),
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum sapien lacus, ut imperdiet orci elementum sed. Donec lobortis vel nunc sit amet luctus.',
  args: {
    limit: {
      type: GraphQLInt,
      description: 'Limits the number of results returned in the page. Defaults to 10.',
    },
    offset: {
      type: GraphQLInt,
      description: 'Indicates the starting record from where the limit will be applied. Defaults to 0.'
    }
  },
  /*
   * Resolver responsible for fetch a list of offices. Arguments include offset and limit for paging
   * along with a search string for full-text searches. Additional support is required for handling
   * filtering; i.e. where clauses with operators.
   */
  resolve(root, args) {
    // Establish defaults and remove from arguments
    const offset = args.offset || 0
    const limit = args.limit || 10
    delete args.offset
    delete args.limit

    // Issue query and return the promise
    return Models.Language.findAll({where: args, include: [], offset, limit })
  }
};
