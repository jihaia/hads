'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Language', {

            languageId: {
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
            relatedEntityType: {
                type: Sequelize.STRING(24),
                allowNull: false
            },
            relatedEntityId: {
                type: Sequelize.STRING(36),
                allowNull: false
            },
            languageCode: {
                type: Sequelize.STRING(24),
                allowNull: false
            },
            sequence: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            beginDate: {
                type: Sequelize.DATE,
                allowNull: true
            },
            endDate: {
                type: Sequelize.DATE,
                allowNull: true
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Language');
    }
};