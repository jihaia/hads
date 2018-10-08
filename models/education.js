module.exports = function(sequelize, DataTypes) {
    var Fax = sequelize.define('Education', {

        educationId: {
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
        degree: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        institution: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        beginDate: {
            type: DataTypes.DATETIME,
            validate: {
                notEmpty: false
            }
        },
        endDate: {
            type: DataTypes.DATETIME,
            validate: {
                notEmpty: false
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Education;
}
