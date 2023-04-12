const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class amenityMedia extends Model {

}

amenityMedia.init(
    {
        amenityMediaID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        mediaURL: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Caption: {
            type: DataTypes.STRING(300),
            
        },
        mainImage: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        Amenity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Amenity',
                key: 'amenityID'
            }
        }    
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'amenityMedia'
    }
)





module.exports = amenityMedia;