import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'webSite',
    fields () {
        return {
            webSiteId: {
                type: GraphQLString,
                description: "A web sites primary key",
                resolve (webSite) {
                    return webSite.webSiteId;
                }
            },
            typeCode: {
                type: GraphQLString,
                description: "The type of webSite",
                resolve (webSite) {
                    return webSite.typeCode;
                }
            },
            description: {
                type: GraphQLString,
                description: "The full telewebSite number",
                resolve (webSite) {
                    return webSite.description;
                }
            },
            webAddress: {
                type: GraphQLString,
                webAddress: "The full telewebSite number",
                resolve (webSite) {
                    return webSite.description;
                }
            },
            primaryFlag: {
                type: GraphQLString,
                description: "Indicates if this is the primary webSite number to the related entity",
                resolve (webSite) {
                    return webSite.primaryFlag;
                }
            }
        };
    }
});
