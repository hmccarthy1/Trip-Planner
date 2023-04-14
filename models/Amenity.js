const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Amenity extends Model {

}

Amenity.init({

    amenityID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
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
    amenityType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'amenityChoice',
            key: 'amenityChoiceID'
        }
    },
    amenityDescription: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Cost: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    amenityRating: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: false
    },
    amenityTitle: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'Amenity'
}

)







module.exports = Amenity;