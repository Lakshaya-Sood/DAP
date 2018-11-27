module.exports = (sequelize, DataTypes) => {
        var tour = sequelize.define('tour', {
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
    })

    return tour;
  }