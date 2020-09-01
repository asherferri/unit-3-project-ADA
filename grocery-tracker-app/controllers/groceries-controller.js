const Groceries = require('../models/groceries-model')
const prettyLog = require('../logging/pretty-logs')

const groceriesController = {
  index: (req, res, next) => {
    prettyLog(`index in groceries-controller.js activated`, null);

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
    prettyLog(`show in groceries-controller.js activated`, null)
    
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
  },

  create: (req, res, next) => {
    prettyLog(`create in groceries-controller.js activated`, null)

    const newGrocery = new Groceries({
      name: req.body.name,
      recurrence: req.body.recurrence,
      lastPurchasedDate: req.body.lastPurchasedDate,
      user_id: 1,

      // Hard coding user_id to 1 since there is no req.user.id yet

      // user_id: req.user.id
    });
    prettyLog(
      "newGrocery in groceriesController.create", 
      newGrocery)

    newGrocery.save()
      .then(grocery => {
        res.json({
          message: 'ok',
          data: { grocery }
        })
        prettyLog(
          "grocery object returned after DB insert in groceriesController.create",
          grocery
        )
      })
      .catch(next)
  }
}

module.exports = groceriesController