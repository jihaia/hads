'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Education', {

            educationId: {
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
            degree: {
                type: Sequelize.STRING(24),
                allowNull: true
            },
            institution: {
                type: Sequelize.STRING(255),
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
            webMobileDirect: {
                type: Sequelize.STRING(1),
                allowNull: true
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Education');
    }
};