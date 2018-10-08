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
        country: {
            type: DataTypes.STRING,
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
        models.Office.hasMany(models.Phone, {
          foreignKey: "relatedEntityId",
          sourceKey: "officeId",
          scope: {
            relatedEntityType: 'Office'
          }
        })

        // Has many web sites
        models.Office.hasMany(models.WebSite, {
            foreignKey: "relatedEntityId",
            sourceKey: "officeId",
            scope: {
              relatedEntityType: 'Office'
            }
          })

        // Has many rosters
        models.Office.hasMany(models.Roster, {
            foreignKey: "officeId",
            sourceKey: "officeId"
          })
    }

    return Office;
}
