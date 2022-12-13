'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Logistic.init({
    logistic_name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    destination_name: DataTypes.STRING,
    origin_name: DataTypes.STRING,
    duration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Logistic',
  });
  return Logistic;
};