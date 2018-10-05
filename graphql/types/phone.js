const GraphQL = require('graphql')
const GraphQLObjectType = GraphQL.GraphQLObjectType
const GraphQLString = GraphQL.GraphQLString


module.exports = new GraphQLObjectType({
    name: 'phone',
    fields () {
        return {
            phoneId: {
                type: GraphQLString,
                description: "A phones's primary key",
                resolve (phone) {
                    return phone.phoneId;
                }
            },
            typeCode: {
                type: GraphQLString,
                description: "The type of phone",
                resolve (phone) {
                    return phone.typeCode;
                }
            },
            phoneNumber: {
                type: GraphQLString,
                description: "The full telephone number",
                resolve (phone) {
                    return phone.phoneNumber;
                }
            },
            primaryFlag: {
                type: GraphQLString,
                description: "Indicates if this is the primary phone number to the related entity",
                resolve (phone) {
                    return phone.primaryFlag;
                }
            },
            publishFlag: {
                type: GraphQLString,
                description: "Lorem ipsum dolar sit",
                resolve (phone) {
                    return phone.publishFlag;
                }
            },
            webMobileDirect: {
                type: GraphQLString,
                description: "Indicates if this is the primary phone number to the related entity",
                resolve (phone) {
                    return phone.primaryFlag;
                }
            }
        };
    }
});
