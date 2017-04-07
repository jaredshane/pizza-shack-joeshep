'use strict';

const User = require('../models/user')

module.exports.show = (req, res) => {
  res.render('register', { page: 'Register' })
}

module.exports.create = ({body: {email, password, confirmation}}, res) => {
  if (password === confirmation) {
    User.findOneByEmail(email)
      .then( (user) => {
        if (user) return res.render('register', { msg: 'Email is already registered' })
        return User.forge({ email, password})
          .save()
          .then( () => {
            res.redirect('/')
          })
          //catch for the save
          .catch( (err) => res.render('register', { msg: 'Dang, there was a problem. Plz try again, bud.' }))
      })
      //catch for findOneByEmail
      .catch( (err) => res.render('register', { msg: 'Try again, man' }))
  } else {
    res.render('register', {msg: 'Passwords do not match'})
  }
}
