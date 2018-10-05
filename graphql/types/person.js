const GraphQL = require('graphql')
const GraphQLObjectType = GraphQL.GraphQLObjectType
const GraphQLList = GraphQL.GraphQLList
const GraphQLString = GraphQL.GraphQLString

const PhoneType = require('./phone.js')

module.exports = new GraphQLObjectType({
    name: 'person',
    fields () {
        return {
            personId: {
                type: GraphQLString,
                description: "A persons's primary key",
                resolve (person) {
                    return person.personId;
                }
            },
            firstName: {
                type: GraphQLString,
                description: "person's first name",
                resolve (person) {
                    return person.firstName;
                }
            },
            lastName: {
                type: GraphQLString,
                description: "person's last name",
                resolve (person) {
                    return person.lastName;
                }
            },
            phones: {
              type: new GraphQLList(PhoneType),
                description: "The list of related telephones",
                resolve(person) {
                  return person.getPhones();
                }
            }
        };
    }
});
