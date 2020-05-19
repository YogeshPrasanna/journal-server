require('./models/User')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require(`./routes/authRoutes`)
const requireAuth = require(`./middlewares/requireAuth`)

const app = express();
// const port = process.env.PORT || 3000;
require('dotenv').config();

app.use(bodyParser.json());
app.use(authRoutes)
// Add headers
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
const mongoUri = process.env.mongoURI
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});



mongoose.connection.on('connected', () => {
    console.log("Connected to mongo instance")
})

mongoose.connection.on('error', (err) => {
    console.log("ERROR : ", err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email is: ${req.user.email}`)
});

app.listen(5000, () => {
    console.log('listenting on port 5000')
})
