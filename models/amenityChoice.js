const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class amenityChoice extends Model {

}

amenityChoice.init(
    {
        amenityChoiceID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        amenityType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amenityIcon: {
            type: DataTypes.TEXT,
            
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'amenityChoice'
    }
)



module.exports = amenityChoice