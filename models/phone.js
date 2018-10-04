module.exports = function(sequelize, DataTypes) {
    var Phone = sequelize.define('Phone', {

        phoneId: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
        masterCustomerId: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: false,
            field: 'masterCustomerId'
        },
        subCustomerId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
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
        phoneNumber: {
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
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Phone;
}
