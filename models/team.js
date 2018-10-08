'use strict'

module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define('Team', {

        teamId: {
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
        teamName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        teamStatus: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        teamClass: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: false
            }
        },
        teamSubClass: {
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
    Team.associate = function(models) {

        // Has many phones
        models.Team.hasMany(models.Phone, {
          foreignKey: "relatedEntityId",
          sourceKey: "teamId",
          scope: {
            relatedEntityType: 'Team'
          }
        })

        // Has many web sites
        models.Team.hasMany(models.WebSite, {
            foreignKey: "relatedEntityId",
            sourceKey: "teamId",
            scope: {
              relatedEntityType: 'Team'
            }
          })

        // Has many rosters
        models.Team.hasMany(models.Roster, {
            foreignKey: "teamId",
            sourceKey: "teamId"
          })
    }

    return Team;
}
