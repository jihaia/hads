'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Office', {

      officeId: {
        type: Sequelize.STRING(36),
        autoIncrement: false,
        primaryKey: true,
        allowNull: false
      },
      masterCustomerId: {
        type: Sequelize.STRING(12),
        allowNull: true
      },
      subCustomerId: {
        type: Sequelize.DECIMAL(3),
        allowNull: true
      },
      legacyId: {
        type: Sequelize.STRING(80),
        allowNull: true
      },
      officeStatus: {
        type: Sequelize.STRING(24),
        allowNull: true
      },
      officeName: {
        type: Sequelize.STRING(80),
        allowNull: true
      },
      officeClass: {
        type: Sequelize.STRING(24),
        allowNull: true
      },
      officeSubClass: {
        type: Sequelize.STRING(24),
        allowNull: true
      },
      officeType: {
        type: Sequelize.STRING(24),
        allowNull: true
      },
      mainOffice: {
        type: Sequelize.STRING(80),
        allowNull: true
      },
      mainOfficeId: {
        type: Sequelize.STRING(12),
        allowNull: true
      },
      mainOfficeSubId: {
        type: Sequelize.DECIMAL(3),
        allowNull: true
      },
      address1: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      address2: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      address3: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      address4: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      city: {
        type: Sequelize.STRING(40),
        allowNull: true
      },
      state: {
        type: Sequelize.STRING(40),
        allowNull: true
      },
      postalCode: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      countryCode: {
        type: Sequelize.STRING(5),
        allowNull: true
      },
      county: {
        type: Sequelize.STRING(40),
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Office');
  }
};