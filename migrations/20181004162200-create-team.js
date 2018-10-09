"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Team", {
      teamId: {
        type: Sequelize.STRING(36),
        autoIncrement: false,
        primaryKey: true
      },
      masterCustomerId: {
        type: Sequelize.STRING(12),
        autoIncrement: false
      },
      subCustomerId: {
        type: Sequelize.DECIMAL(3),
        allowNull: true
      },
      teamName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      teamStatus: {
        type: Sequelize.STRING(24),
        allowNull: false
      },
      teamClass: {
        type: Sequelize.STRING(24),
        allowNull: false
      },
      teamSubClasss: {
        type: Sequelize.STRING(24),
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Team")
  }
};
