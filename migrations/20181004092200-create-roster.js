'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roster', {

    rosterId: {
        type: Sequelize.STRING(36),
        primaryKey: true,
        allowNull: false
    },
    personId: {
        type: Sequelize.STRING(36),
        allowNull: true
    },
    officeId: {
        type: Sequelize.STRING(36),
        allowNull: true
    },
    relationshipType: {
        type: Sequelize.STRING(24),
        allowNull: true
    },
    relationshipCode: {
        type: Sequelize.STRING(24),
        allowNull: true
    },
    beginDate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    primaryFlag: {
        type: Sequelize.STRING(1),
        allowNull: true
    },
    officeMasterCustomerId: {
      type: Sequelize.STRING(36),
      allowNull: true
    },
    officeSubCustomerId: {
      type: Sequelize.DECIMAL(3),
      allowNull: true
    },
    personMasterCustomerId: {
      type: Sequelize.STRING(36),
      allowNull: true
    },
    personSubCustomerId: {
      type: Sequelize.DECIMAL(3),
      allowNull: true
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Roster');
  }
};