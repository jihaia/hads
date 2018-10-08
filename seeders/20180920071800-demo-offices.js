'use strict';
const uuid = require('uuid/v1')
const faker = require('faker')
const _str = require('underscore.string')

module.exports = {
  up: function (queryInterface, Sequelize) {

    var offices = []
    var phones = []
    var faxes = []
    var people = []
    var rosters = []
    var webSites = []

    for (var step = 0; step < 1000; step++) {
      var office = {
        officeId: uuid(),
        officeName: faker.company.companyName(),
        address1: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        postalCode: faker.address.zipCode(),
        country: 'US'
      }
      offices.push(office)
    }

    return queryInterface.bulkInsert('Office', offices)
      .then(() => {

        // Build an office phone for each office
        offices.forEach((office) => {
          // create a telephone for each office
          phones.push({
            phoneId: uuid(),
            relatedEntityType: 'Office',
            relatedEntityId: office.officeId,
            phoneNumber: faker.phone.phoneNumber(),
            primaryFlag: 1
          })
        })

        return queryInterface.bulkInsert('Phone', phones)
          .then(() => {

            // Build people per office
            offices.forEach((office) => {

              for (var step = 0; step < 5; step++) {
                var person = {
                  personId: uuid(),
                  firstName: faker.name.firstName(),
                  lastName: faker.name.lastName()
                }

                people.push(person)
                rosters.push({
                  rosterId: uuid(),
                  personId: person.personId,
                  officeId: office.officeId
                })

              }

            })

            return queryInterface.bulkInsert('Roster', rosters)
              .then(() => {

                return queryInterface.bulkInsert('Person', people)
                  .then(()=>{

                    offices.forEach((office)=>{
                      webSites.push({
                        webSiteId: uuid(),
                        relatedEntityId: office.officeId,
                        relatedEntityType: 'Office',
                        webAddress: 'https://www.remax.com/' + _str.dasherize(office.officeName)
                      })
                    })

                    return queryInterface.bulkInsert('WebSite', webSites)
                  })
              })

          })

      })
  },
  down: function (queryInterface, Sequelize) {

  }
};
