module.exports = (sequelize, DataTypes) => {
    sequelize.define('application', {
        app_id: { 
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            validate: { 
                isUUID: 4
            }
        },
        app_name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        tours: {
            type: DataTypes.ARRAY(DataTypes.TEXT), 
            allowNull: false,  
            defaultValue: '{}'
        }
    },
    {
        associate: function(models) {
            application.hasMany(models.tour);
        }
    })
  }