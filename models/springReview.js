const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class springReview extends Model {
    
    
}


springReview.init(
    {
        springReviewID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Spring: {
            type: DataTypes.INTEGER,
            references: {
                model: 'spring',
                key: 'springID'
            },
            allowNull: false
        },
        reviewingUser: {
            
                type: DataTypes.INTEGER,
                references: {
                    model: 'user',
                    key: 'userID'
                },
                allowNull: false
            },
        userSpringRating: {
            type: DataTypes.DECIMAL(2,1),
            allowNull: false
        },
        reviewText: {
            type: DataTypes.TEXT,
            allowNull: false
        }
        
        },
        {
            sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'springReview',
        }
    
)






module.exports = springReview