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
