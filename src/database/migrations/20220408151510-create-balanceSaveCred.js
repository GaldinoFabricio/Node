'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('Balances', { 
         id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
         },
         balance: {
            type: Sequelize.DECIMAL,
            allowNull: false,
         },
         createdAt: Sequelize.DATE,
         updatedAt: Sequelize.DATE,
      });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('Balances');
  }
};
