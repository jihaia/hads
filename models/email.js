module.exports = function(sequelize, DataTypes) {
    var Email = sequelize.define('Email', {
        
        emailId: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
        masterCustomerId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        subCustomerId: {
            type: DataTypes.DECIMAL,
            validate: {
                notEmpty: false
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
        emailAddress: {
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
        publishFlag: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        webMobileDirectFlag: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Email;
}
