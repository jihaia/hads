module.exports = function(sequelize, DataTypes) {
    var Language = sequelize.define('Language', {

        languageId: {
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
        language: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        sequence: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Language;
}
