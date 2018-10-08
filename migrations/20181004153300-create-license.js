'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('License', {

            licenseId: {
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
            licenseType: {
                type: Sequelize.STRING(24),
                allowNull: false
            },
            licenseNo: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            country: {
                type: Sequelize.STRING(24),
                allowNull: true
            },
            state: {
                type: Sequelize.STRING(24),
                allowNull: true
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
        return queryInterface.dropTable('License');
    }
};