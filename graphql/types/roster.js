const GraphQL = require('graphql')
const GraphQLObjectType = GraphQL.GraphQLObjectType
const GraphQLString = GraphQL.GraphQLString

const PersonType = require('./person.js')
// const OfficeType = require('./office.js')

module.exports = new GraphQLObjectType({
    name: 'roster',
    fields () {
        return {
            rosterId: {
                type: GraphQLString,
                description: "Primary key for relationship between person and office",
                resolve (roster) {
                    return roster.rosterId;
                }
            },
            personId: {
                type: GraphQLString,
                description: "A persons primary key",
                resolve (roster) {
                    return roster.personId;
                }
            },
            officeId: {
                type: GraphQLString,
                description: "An offices's primary key",
                resolve (roster) {
                    return roster.officeId;
                }
            },
            relationshipType: {
                type: GraphQLString,
                description: "The current status of the office",
                resolve (roster) {
                    return roster.relationshipType;
                }
            },
            relationshipCode: {
                type: GraphQLString,
                description: "The current status of the office",
                resolve (roster) {
                    return roster.relationshipCode;
                }
            },
            person: {
                type: PersonType,
                description: "the associated person",
                resolve (roster) {
                    return roster.getPerson();
                }
            }
            // office: {
            //     type: OfficeType,
            //     description: "the associated office",
            //     resolve (roster) {
            //         return roster.getOffice();
            //     }
            // }
        };
    }
});
