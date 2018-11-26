module.exports = (sequelize, DataTypes) => {
        sequelize.define('tour', {
        tour_id: {
            type: DataTypes.UUID, 
            allowNull: false, 
            defaultValue: DataTypes.UUIDV4,
            validate: { 
                isUUID: 4
            }
        },
        tour_name: { 
            type: DataTypes.STRING(40), 
            allowNull: false 
        },
        steps: DataTypes.JSON
    },
    {
        associate: function(models) {
            tour.belongsTo(models.application);
        }
    })
  }