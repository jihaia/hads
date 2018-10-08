'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('OptIn', {

            optInId: {
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
            optInCode: {
                type: Sequelize.STRING(24),
                allowNull: false
            },
            optInName: {
                type: Sequelize.STRING(24),
                allowNull: false
            },
            optInSubName: {
                type: Sequelize.STRING(24),
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(50),
                allowNull: true
            },
            optedInFlag: {
                type: Sequelize.STRING(1),
                allowNull: true
            },
            optedInDate: {
                type: Sequelize.DATETIME,
                allowNull: true
            },
            optedOutDate: {
                type: Sequelize.DATETIME,
                allowNull: true
            },
            optInExpirationDate: {
                type: Sequelize.DATETIME,
                allowNull: true
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('OptIn');
    }
};