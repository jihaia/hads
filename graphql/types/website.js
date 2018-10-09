const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;

module.exports = new GraphQLObjectType({
  name: "webSite",
  fields() {
    return {
      webSiteId: {
        type: GraphQLString,
        description: "A web sites primary key",
        resolve(webSite) {
          return webSite.webSiteId;
        }
      },
      typeCode: {
        type: GraphQLString,
        description: "The type of webSite",
        resolve(webSite) {
          return webSite.typeCode;
        }
      },
      webAddress: {
        type: GraphQLString,
        webAddress: "The full telewebSite number",
        resolve(webSite) {
          return webSite.webAddress;
        }
      },
      primaryFlag: {
        type: GraphQLString,
        description:
          "Indicates if this is the primary phone number to the related entity",
        resolve(webSite) {
          return webSite.primaryFlag;
        }
      },
      publishFlag: {
        type: GraphQLString,
        description: "Lorem ipsum dolar sit",
        resolve(webSite) {
          return webSite.publishFlag;
        }
      },
      webMobileDirectFlag: {
        type: GraphQLString,
        description:
          "Indicates if this is the primary webSite number to the related entity",
        resolve(webSite) {
          return webSite.webMobileDirectFlag;
        }
      }
    };
  }
});
