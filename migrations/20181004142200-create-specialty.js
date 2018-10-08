'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Specialty', {

            specialtyId: {
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
            specialty: {
                type: Sequelize.STRING(24),
                allowNull: true
            },
            subSpecialty: {
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
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Specialty');
    }
};