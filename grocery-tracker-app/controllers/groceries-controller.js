const Groceries = require('../models/groceries-model')
const prettyLog = require('../logging/pretty-logs')

const groceriesController = {
    index: (req, res, next) => {
        Groceries.getAllUserGroceries(req.user.id)
            .then(groceries => {
                prettyLog(
                    "groceries from getAllUserGroceries(id) in groceriesController.index", 
                    groceries)
                res.json({
                    message: 'ok',
                    data: { groceries }
                })
            })
            .catch(next)
        }
}


module.exports = groceriesController