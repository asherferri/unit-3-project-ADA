const Groceries = require('../models/groceries-model')
const prettyLog = require('../logging/pretty-logs')

const groceriesController = {
    index: (req, res, next) => {
        // Hard coding user_id to 1 since there is no req.user.id yet 

        // Groceries.getAllUserGroceries(req.user.id)

        Groceries.getAllUserGroceries('1')
          .then(groceries => {
            prettyLog(
              "groceries from getAllUserGroceries(id) in groceriesController.index",
              groceries
            )

            res.json({
              message: "ok",
              data: { groceries }
            });
          })
          .catch(next);
      },

      show: (req, res, next) => {
        console.log('show activated')
        Groceries.getById(req.params.id)
          .then(grocery => {
            prettyLog(
              "grocery from getById(id) in groceriesController.show",
              grocery)

              res.json({
                message: "ok",
                data: { grocery }
              })
          })
          .catch(next)
      }
}


module.exports = groceriesController