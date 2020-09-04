const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
//not sure we need methodOverride but jst in case.
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
//added moment denpendency
const moment = require('moment')

//trackedGroceriesRouter
const groceriesRouter = require('./routes/groceries-router')
// // UNCOMENT THIS NEXT LINES AS PROGRESS REQUIRES
// //authRouter
const authRouter = require('./routes/auth-router')
// //usersRouter
// const usersRouter = require('./routes/users-router')

const app = express()
require('dotenv').config()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(cookieParser())
// //uncoment this when updating server.js for auth addon
app.use(
    session({
        key:process.env.SECRET_KEY,
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    })
)
//added when updating server.js for auth addon
//added passport and session use for app
app.use(passport.initialize())
app.use(passport.session())



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Listening Unleash The Bastards - By Municipal Waste on port ${PORT}`)
})

app.get('/', (req, res) => {
//   //sends life signs as a pckge json
    res.json({
        trackedGroceriesApp: `this is a trackedGroceriesApp by A.D.A.🤘🏻`
    })
//sends life signs as html element
   //res.send('<h1>This is a trackedGroceriesApp</h1>')
//sends render of index view
//     res.render('index') 
})
// //uncoment this when auth layer is added
// //add use to authRoute
app.use('/api/auth', authRouter)
// //add use to userRoute
// app.use('/api/users', usersRouter)
//add use to route
app.use('/api/groceries', groceriesRouter)


app.use('*', (req, res) => {
    res.status(404).send('Nein Nein not hereee nothing neiiinn')
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
})
