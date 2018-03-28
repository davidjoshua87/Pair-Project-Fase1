'use strict';
module.exports = (sequelize, DataTypes) => {
  var Chart = sequelize.define('Chart', {
    BookId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    TransactionId: DataTypes.INTEGER,
    Qty: DataTypes.INTEGER
  }, {});
  Chart.associate = function(models) {
    // associations can be defined here
  };
  return Chart;
};