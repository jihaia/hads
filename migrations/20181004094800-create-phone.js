'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Phone', {

            phoneId: {
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
            phoneType: {
                type: Sequelize.STRING(24),
                allowNull: true
            },
            phoneNumber: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            primaryFlag: {
                type: Sequelize.STRING(1),
                allowNull: true
            },
            publishFlag: {
                type: Sequelize.STRING(1),
                allowNull: true
            },
            webMobileDirect: {
                type: Sequelize.STRING(1),
                allowNull: true
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Phone');
    }
};