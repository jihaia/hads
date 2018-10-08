module.exports = function(sequelize, DataTypes) {
    var OptIn = sequelize.define('OptIn', {

        optInId: {
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
        optInType: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        optInName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        optInSubName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        optedInFlag: {
            type: DataTypes.STRING,
            defaultValue: "1",
            validate: {
                notEmpty: true
            }
        },
        optedInDate: {
            type: DataTypes.DATETIME,
            validate: {
                notEmpty: false
            }
        },
        optedInExpirationDate: {
            type: DataTypes.DATETIME,
            validate: {
                notEmpty: false
            }
        },
        optedOutDate: {
            type: DataTypes.DATETIME,
            validate: {
                notEmpty: false
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return OptIn;
}
