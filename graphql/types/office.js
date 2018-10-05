const GraphQL = require('graphql')
const GraphQLObjectType = GraphQL.GraphQLObjectType
const GraphQLList = GraphQL.GraphQLList
const GraphQLString = GraphQL.GraphQLString

// import models from '../../models/index.js';
const PhoneType = require('./phone.js')
// const WebSiteType = require('./website.js')
// const RosterType = require('./roster.js')

module.exports = new GraphQLObjectType({
    name: 'Office',
    fields() {
        return {
            officeId: {
                type: GraphQLString,
                description: "A offices's primary key",
                resolve(office) {
                    return office.officeId;
                }
            },
            officeStatus: {
                type: GraphQLString,
                description: "The current status of the office",
                resolve(office) {
                    return office.officeStatus;
                }
            },
            officeName: {
                type: GraphQLString,
                description: "office's public facing name",
                resolve(office) {
                    return office.officeName;
                }
            },
            address1: {
                type: GraphQLString,
                description: "Primary address line 1",
                resolve(office) {
                    return office.address1;
                }
            },
            address2: {
                type: GraphQLString,
                description: "Primary address line 2",
                resolve(office) {
                    return office.address2;
                }
            },
            address3: {
                type: GraphQLString,
                description: "Primary address line 3",
                resolve(office) {
                    return office.address3;
                }
            },
            address4: {
                type: GraphQLString,
                description: "Primary address line 4",
                resolve(office) {
                    return office.address4;
                }
            },
            city: {
                type: GraphQLString,
                description: "Primary address city",
                resolve(office) {
                    return office.city;
                }
            },
            state: {
                type: GraphQLString,
                description: "Primary address state",
                resolve(office) {
                    return office.state;
                }
            },
            postalCode: {
                type: GraphQLString,
                description: "Primary address postal/zip code",
                resolve(office) {
                    return office.postalCode;
                }
            },
            countryCode: {
                type: GraphQLString,
                description: "Primary address country code",
                resolve(office) {
                    return office.countryCode;
                }
            },
            phones: {
                type: new GraphQLList(PhoneType),
                description: "The list of related telephones",
                resolve(office) {
                    return office.getPhones();
                }
            }//,
            // webSites: {
            //     type: new GraphQLList(WebSiteType),
            //     description: "The list of registered websites",
            //     resolve(office) {
            //         return office.getWebSites();
            //     }
            // },
            // rosters: {
            //     type: new GraphQLList(RosterType),
            //     description: "The list of related personOffices",
            //     resolve(office) {
            //         return office.getRosters();
            //     }
            // }
        };
    }
});
