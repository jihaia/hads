import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import models from '../../models/index.js';
import PersonType from './person.js'
import OfficeType from './office.js'

export default new GraphQLObjectType({
    name: 'personOffice',
    fields () {
        return {
            personOfficeId: {
                type: GraphQLString,
                description: "Primary key for relationship between person and office",
                resolve (personOffice) {
                    return personOffice.personOfficeId;
                }
            },
            personId: {
                type: GraphQLString,
                description: "A offices's primary key",
                resolve (personOffice) {
                    return personOffice.personId;
                }
            },
            officeId: {
                type: GraphQLString,
                description: "A offices's primary key",
                resolve (personOffice) {
                    return personOffice.officeId;
                }
            },
            relationshipType: {
                type: GraphQLString,
                description: "The current status of the office",
                resolve (personOffice) {
                    return personOffice.relationshipType;
                }
            },
            relationshipCode: {
                type: GraphQLString,
                description: "The current status of the office",
                resolve (personOffice) {
                    return personOffice.relationshipCode;
                }
            },
            person: {
                type: PersonType,
                description: "the associated person",
                resolve (personOffice) {
                    return personOffice.getPerson();
                }
            },
            office: {
                type: OfficeType,
                description: "the associated office",
                resolve (personOffice) {
                    return personOffice.getOffice();
                }
            }
        };
    }
});
