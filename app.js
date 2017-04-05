'use strict';

require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const routes = require('./routes')


//pug config
app.set('view engine', 'pug')

app.locals.company = '🍕Pizza Shack🍕'
app.locals.body = {}
app.locals.errors = {}
app.locals.body.magic = "Foooo!"

//Middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(routes)

app.use((req, res) => {
  res.render('404')
})

//end of middleware

const port = process.env.PORT || 3005
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
