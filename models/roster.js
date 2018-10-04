module.exports = function(sequelize, DataTypes) {
    
    var Roster = sequelize.define('Roster', {

        rosterId: {
            type: DataTypes.STRING
        },
        personId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        officeId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        relationshipType: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        relationshipCode: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        beginDate: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        primaryFlag: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    })

    // ASSOCIATIONS 
    Roster.associate = function(models) {

        // Belongs to Person
        models.Roster.belongsTo(models.Person, {
          foreignKey: "personId",
          sourceKey: "personId"
        })

        // Belongs to Office
        models.Roster.belongsTo(models.Office, {
            foreignKey: "officeId",
            sourceKey: "officeId"
          })
    }

    return Roster;
}
