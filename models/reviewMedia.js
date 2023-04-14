const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class reviewMedia extends Model {

}

reviewMedia.init(
    {
        reviewMediaID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Review: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'springReview',
                key: 'springReviewID'
            }
        },
        mediaURL: {
            type: DataTypes.BLOB('long'),
            allowNull: false
        },
        Caption: {
            type: DataTypes.STRING(1500),
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'reviewMedia'
    }
)








module.exports = reviewMedia