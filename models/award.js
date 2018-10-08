module.exports = function(sequelize, DataTypes) {
    var Fax = sequelize.define('Award', {

        awardId: {
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
        nomineeRecognitionId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        awardDate: {
            type: DataTypes.DATETIME,
            validate: {
                notEmpty: false
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Award;
}
