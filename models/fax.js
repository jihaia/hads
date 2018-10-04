module.exports = function(sequelize, DataTypes) {
    var Fax = sequelize.define('Fax', {

        faxId: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
        masterCustomerId: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        subCustomerId: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        relatedEntityType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        relatedEntityId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        typeCode: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        faxNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        primaryFlag: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        publishFlag: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Fax;
}
