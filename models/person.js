module.exports = function(sequelize, DataTypes) {
    var Person = sequelize.define('Person', {

        personId: {
            type: DataTypes.STRING,
            autoIncrement: false,
            primaryKey: true
        },
        masterCustomerId: {
            type: DataTypes.STRING
        },
        subCustomerId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        legacyId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        firstName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        middleName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        namePrefix: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        nameSuffix: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        nickname: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        maidenName: {
            type: DataTypes.STRING,
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
            validate: {
                notEmpty: false
            }
        },
        firstYearLicense: {
            type: DataTypes.DECIMAL,
            validate: {
                notEmpty: false
            }
        },
        status: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        photoURL: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        biography: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        billDue: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        birthDate: {
            type: DataTypes.DATE,
            validate: {
                notEmpty: false
            }
        },
        gender: {
            type: DataTypes.STRING,
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
