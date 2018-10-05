const GraphQL = require('graphql')
const GraphQLObjectType = GraphQL.GraphQLObjectType
const GraphQLString = GraphQL.GraphQLString

module.exports = new GraphQLObjectType({
    name: 'language',
    fields () {
        return {
            languageId: {
                type: GraphQLString,
                description: "A languages's primary key",
                resolve (language) {
                    return language.languageId;
                }
            },
            language: {
                type: GraphQLString,
                description: "The name of the language",
                resolve (language) {
                    return language.language;
                }
            },
            sequence: {
                type: GraphQLString,
                description: "The order of the language when displayed amongst other languages",
                resolve (language) {
                    return language.sequence;
                }
            }
        };
    }
});
