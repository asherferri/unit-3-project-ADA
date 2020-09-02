const bcrypt = require('bcryptjs')
const User = require('../models/users-model')

const usersController = {
  create(req, res, next) {
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(req.body.password, salt)
    new User({
      username: req.body.username,
      email: req.body.email,
      password_digest: hash,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    })
      .save()
      .then((user) => {
        req.login(user, (err) => {
          res.json({
            auth: true,
            data: {
              user: user,
            },
          })
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
