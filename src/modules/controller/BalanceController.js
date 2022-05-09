const Balance = require('../models/balance');

module.exports = {
   async index(req,res) {
      const balance = await Balance.findAll();

      return res.json(balance);
   },

   async createBalance(req,res) {
      const { balance } = req.body;
      
      const balanceController = await Balance.create({balance});
      
      
      return res.json(balanceController);
   }
}