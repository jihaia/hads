module.exports = function(sequelize, DataTypes) {
    var WebSite = sequelize.define('WebSite', {

        webSiteId: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        masterCustomerId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        subCustomerId: {
            type: DataTypes.STRING,
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
        webAddress: {
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
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return WebSite;
}
