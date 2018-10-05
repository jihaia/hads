module.exports = function(sequelize, DataTypes) {
    var Phone = sequelize.define('Phone', {

        phoneId: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        masterCustomerId: {
            type: DataTypes.STRING
        },
        subCustomerId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        relatedEntityType: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        relatedEntityId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        typeCode: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        primaryFlag: {
            type: DataTypes.STRING,
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
