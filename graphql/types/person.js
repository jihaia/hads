import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';

import models from '../../models/index.js';
import PhoneType from './phone.js'

export default new GraphQLObjectType({
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
