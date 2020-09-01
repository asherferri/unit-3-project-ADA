const groceriesController = require('../controllers/groceries-controller')

const groceriesRouter = require('express').Router()

groceriesRouter.get('/', groceriesController.index)
groceriesRouter.post('/', groceriesController.create)
groceriesRouter.get('/:id([0-9]+)', groceriesController.show)
groceriesRouter.put('/:id([0-9]+)', groceriesController.update)

module.exports = groceriesRouter