module.exports = function(sequelize, DataTypes) {
    var Specialty = sequelize.define('Specialty', {

        specialtyId: {
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
        specialty: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        subSpecialty: {
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

    return Specialty;
}
