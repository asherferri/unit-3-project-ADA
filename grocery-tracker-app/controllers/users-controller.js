const bcrypt = require('bcryptjs')
const User = require('../models/users-model')

const usersController = {
  create(req, res, next) {
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(req.body.password, salt)
    new User({
      username: req.body.username,
      email: req.body.email,
      passwordDigest: hash,
      firstName: req.body.first_name,
      lastName: req.body.last_name,
    })
      .save()
      .then((user) => {
        req.login(user, (err) => {
          if (err) return next(err)
          //we declare wich view we land after signing up
          //we dont want it to land on an objext view.
          //redirect to spit user created for testing
          //res.redirect('/user')
          // res.redirect('/api/groceries')
        })
      })
      .catch(next)
  },
}

module.exports = usersController
