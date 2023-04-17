const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class springMedia extends Model {

}

springMedia.init (
    {
        springMediaID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Spring: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'spring',
                key: 'springID'
            }
        },
        mediaURL: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Caption: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mainImage: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'springMedia',
    }
)








module.exports = springMedia