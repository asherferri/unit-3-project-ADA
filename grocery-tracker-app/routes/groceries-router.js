const groceriesController = require('../controllers/groceries-controller')

const groceriesRouter = require('express').Router()

groceriesRouter.get('/', groceriesController.index)

module.exports = groceriesRouter