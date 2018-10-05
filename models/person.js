module.exports = function(sequelize, DataTypes) {
    var Person = sequelize.define('Person', {

        personId: {
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
        legacyId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        namePrefix: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        nameSuffix: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        maidenName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        nameCredentials: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        joinDate: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        firstYearLicensed: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        photoURL: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        biography: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        billDue: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        sorRowId: {
            type: DataTypes.BIGINT,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        sorRowId: {
            type: DataTypes.BIGINT,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    Person.associate = function(models) {
        models.Person.hasMany(models.Phone, {
          foreignKey: "relatedEntityId",
          sourceKey: "personId",
          scope: {
            relatedEntityType: 'Person'
          }
        })
    }

    return Person;
}
