'use strict';

require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./routes')


//pug config
app.set('view engine', 'pug')

app.locals.company = '🍕Pizza Shack🍕'
app.locals.body = {}
app.locals.body.magic = "Foooo!"

//Middleware
app.use(express.static('public'))
app.use(routes)






app.get('/register', (req, res, next) => {
  res.render('register', {page: 'Register'})
})

app.use((req, res) => {
  res.render('404')
})

//end of middleware

const port = process.env.PORT || 3005
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
