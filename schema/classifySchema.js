const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('book_category', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
}