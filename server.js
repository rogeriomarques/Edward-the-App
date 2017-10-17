const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const passport = require('passport')
const path = require('path')
const timeout = require('connect-timeout')

var env = require('node-env-file')
if (!process.env.DATABASE_URL) {
  env(path.join(__dirname, '.env'))
}

const app = express()

// Serve static files
app.use('/static', express.static(path.join(__dirname, 'static')))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(timeout(15000))

// Serve public landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Database ORM
require('./models/_index')

// Configure passport auth
require('./passport/config')(passport)

// Auth sessions
var session = require('express-session')
app.use(session({
  store: new (require('connect-pg-simple')(session))({
    conString: process.env.DATABASE_URL
  }),
  saveUninitialized: false,
  secret: process.env.SESSION_COOKIE_SECRET,
  resave: false,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    secure: !!process.env.INSECURE_COOKIES
  }
}))
app.use(passport.initialize())
app.use(passport.session())

// REST APIs
require('./api/_index')(app, passport)

// Listen
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Express listening on port ' + port)
})

module.exports = app
