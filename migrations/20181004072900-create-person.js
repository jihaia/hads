'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {

      personId: {
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
      firstName: {
        type: Sequelize.STRING(40),
        allowNull: true
      },
      lastName: {
        type: Sequelize.STRING(60),
        allowNull: true
      },
      middleName: {
        type: Sequelize.STRING(40),
        allowNull: true
      },
      namePrefix: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      nameSuffix: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      nickname: {
        type: Sequelize.STRING(80),
        allowNull: true
      },
      maidenName: {
        type: Sequelize.STRING(80),
        allowNull: true
      },
      nameCredentials: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      joinDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      firstYearLicense: {
        type: Sequelize.INTEGER(11),
        allowNull: true
      },
      status: {
        type: Sequelize.STRING(24),
        allowNull: true
      },
      photoUrl: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      biography: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      billDue: {
        type: Sequelize.INTEGER(11),
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
};