'use strict'

module.exports = function(sequelize, DataTypes) {
    var Office = sequelize.define('Office', {

        officeId: {
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
        legacyId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        officeStatus: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        officeName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        officeClass: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        officeSubClass: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        officeType: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        mainOffice: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        mainOfficeId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        mainOfficeSubId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        address1: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        address2: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        address3: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        address4: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        city: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        state: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        postalCode: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        countryCode: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        countryDescription: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        county: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        sorRowId: {
            type: DataTypes.BIGINT,
            validate: {
                notEmpty: false
            }
        },
        sorSystemId: {
            type: DataTypes.BIGINT,
            validate: {
                notEmpty: false
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    // ASSOCIATIONS
    Office.associate = function(models) {

        // Has many phones
        // models.office.hasMany(models.phone, {
        //   foreignKey: "relatedEntityId",
        //   sourceKey: "officeId",
        //   scope: {
        //     relatedEntityType: 'Office'
        //   }
        // })

        // Has many web sites
        // models.office.hasMany(models.webSite, {
        //     foreignKey: "relatedEntityId",
        //     sourceKey: "officeId",
        //     scope: {
        //       relatedEntityType: 'Office'
        //     }
        //   })

        // Has many officePersons
        // models.office.hasMany(models.personOffice, {
        //     foreignKey: "officeId",
        //     sourceKey: "officeId"
        //   })
    }

    return Office;
}
