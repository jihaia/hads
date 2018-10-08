module.exports = function(sequelize, DataTypes) {
    var License = sequelize.define('License', {

        licenseId: {
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
        licenseType: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        licenseNo: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        country: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        state: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        beginDate: {
            type: DataTypes.DATE,
            validate: {
                notEmpty: false
            }
        },
        endDate: {
            type: DataTypes.DATE,
            validate: {
                notEmpty: false
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return License;
}
