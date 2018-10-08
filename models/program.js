module.exports = function(sequelize, DataTypes) {
    var Program = sequelize.define('Program', {

        programId: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
        programCode: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        programName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        programYear: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true
            }
        },
        programDate: {
            type: DataTypes.DATE,
            validate: {
                notEmpty: true
            }
        },
        activeFlag: {
            type: DataTypes.STRING,
            defaultValue: '1',
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Program;
}
