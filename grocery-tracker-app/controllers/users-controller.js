const bcrypt = require('bcryptjs')
const User = require('../models/users-model')

const usersController = {
  index(req, res, next) {
    req.user
      .findUserPantry()
      .then((groceries) => {
        //working response of user's added groceries
        // res.json({
        //   message: 'user profile on this route',
        //   data: {
        //     user: req.user,
        //     groceries,
        //   },
        // })
        //res.render('/userPantry')
        res.redirect('/pantry')
      })
      .catch(next)
  },

  create(req, res, next) {
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(req.body.password, salt)
    new User({
      username: req.body.username,
      email: req.body.email,
      password_digest: hash,
    })
      .save()
      .then((user) => {
        req.login(user, (err) => {
          if (err) return next(err)
          //we declare wich view we land after signing up
          //we dont want it to land on an objext view.
          //redirect to spit user created for testing
          //res.redirect('/user')
          res.redirect('/pantry')
        })
      })
      .catch(next)
  },
}

module.exports = usersController