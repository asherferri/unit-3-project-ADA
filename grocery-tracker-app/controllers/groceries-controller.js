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
              groceries.length
            )

            res.json({
              message: "ok",
              data: { groceries },
            });
          })
          .catch(next);
        }
}


module.exports = groceriesController