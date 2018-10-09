"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Membership", {
      membershipId: {
        type: Sequelize.STRING(36),
        autoIncrement: false,
        primaryKey: true
      },
      personId: {
        type: Sequelize.STRING(36),
        allowNull: true
      },
      teamId: {
        type: Sequelize.STRING(36),
        allowNull: true
      },
      personMasterCustomerId: {
        type: Sequelize.STRING(12),
        allowNull: true
      },
      personSubCustomerId: {
        type: Sequelize.DECIMAL(3),
        allowNull: true
      },
      teamMasterCustomerId: {
        type: Sequelize.STRING(12),
        allowNull: true
      },
      teamSubCustomerId: {
        type: Sequelize.DECIMAL(3),
        allowNull: true
      },
      relationshipType: {
        type: Sequelize.STRING(24),
        allowNull: false
      },
      relationshipCode: {
        type: Sequelize.STRING(24),
        allowNull: false
      },
      beginDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      primaryFlag: {
        type: Sequelize.STRING(1),
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Membership");
  }
};
