module.exports = function(sequelize, DataTypes) {
    
    var Membership = sequelize.define('Membership', {

        membershipId: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        personId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        teamId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        personMasterCustomerId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        personSubCustomerId: {
            type: DataTypes.DECIMAL,
            validate: {
                notEmpty: false
            }
        },
        teamMasterCustomerId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        teamSubCustomerId: {
            type: DataTypes.DECIMAL,
            validate: {
                notEmpty: false
            }
        },
        relationshipType: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        relationshipCode: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        beginDate: {
            type: DataTypes.DATE,
            validate: {
                notEmpty: false
            }
        },
        endDate: {
            type: DataTypes.DATE,
            validate: {
                notEmpty: true
            }
        },
        primaryFlag: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    })

    // ASSOCIATIONS 
    Membership.associate = function(models) {

        // Belongs to Person
        models.Membership.belongsTo(models.Person, {
          foreignKey: "personId",
          sourceKey: "personId"
        })

        // Belongs to Office
        models.Membership.belongsTo(models.Office, {
            foreignKey: "officeId",
            sourceKey: "officeId"
          })
    }

    return Membership;
}
