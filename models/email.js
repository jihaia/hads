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
        emailAddress: {
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
            defaultValue: "0",
            validate: {
                notEmpty: true
            }
        },
        publishFlag: {
            type: DataTypes.STRING,
            defaultValue: "1",
            validate: {
                notEmpty: true
            }
        },
        webMobileDirectFlag: {
            type: DataTypes.STRING,
            defaultValue: "1",
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Email;
}
