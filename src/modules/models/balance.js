const { Model, DataTypes } = require('sequelize');

class Balance extends Model {
   static init(sequelize) {
      super.init({
         balance: DataTypes.DECIMAL,
      },{
         sequelize
      })
   }
}

module.exports = Balance;