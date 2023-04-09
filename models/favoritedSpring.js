const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class favoritedSpring extends Model {

}

favoritedSpring.init(
    {
        favoritedSpringID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        User: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'userID'
            }
        },
        Spring: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'spring',
                key: 'springID'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'favoritedSpring'
    }
)



module.exports = favoritedSpring