'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Program', {

            programId: {
                type: Sequelize.STRING(36),
                autoIncrement: false,
                primaryKey: true
            },
            programCode: {
                type: Sequelize.STRING(24),
                allowNull: false
            },
            programName: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            programYear: {
                type: Sequelize.INTEGER(11),
                allowNull: true
            },
            programDate: {
                type: Sequelize.DATE,
                allowNull: true
            },
            activeFlag: {
                type: Sequelize.STRING(1),
                allowNull: false
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Program');
    }
};