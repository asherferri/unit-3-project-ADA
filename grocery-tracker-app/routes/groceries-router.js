const groceriesController = require('../controllers/groceries-controller')

const groceriesRouter = require('express').Router()

groceriesRouter.get('/', groceriesController.index)
groceriesRouter.get('/:id([0-9]+)', groceriesController.show);

module.exports = groceriesRouter