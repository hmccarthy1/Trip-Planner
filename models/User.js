const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.userPassword);
  }
  getFullName() {
    return this.firstName + "  " + this.lastName
  }
}

User.init(
  {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    createdOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    modifiedOn: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },

    profilePictureURL: {
      type: DataTypes.STRING,
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.userPassword = await bcrypt.hash(newUserData.userPassword, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'user',
  }
);


module.exports = User;