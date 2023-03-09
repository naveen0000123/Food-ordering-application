require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/opzdb'
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
var appRoutes = require("./routes/appRoutes")
var adminRoutes = require('./routes/adminRoute')

// process.env.PORT hoy to e else 3000
const PORT = process.env.PORT || 3000

// some useful library
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:4200'}))

 
// data base connection
mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost:27017/pizza')
const con = mongoose.connection
con.on('open', () => {
    console.log("database connected");
})



// for testing purposr
app.get('/', (req, res) => {
    res.send("Server is running on this port ")
})



// route configure
app.use('/', appRoutes)
app.use('/admin', adminRoutes)



// print console message
app.listen(PORT, () => {
    console.log(`Listing onnn port ${PORT}`);
})

