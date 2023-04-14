const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spring extends Model {}


Spring.init(

    {
        springID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        springName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        longitude: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        springState: {
            type: DataTypes.STRING,
            allowNull: false

        },
        County: {
            type: DataTypes.STRING,
            allowNull: false

        },
        springDescription: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'spring',
    }

)

module.exports = Spring