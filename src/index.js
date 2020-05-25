require('./models/User')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport')

const users = require(`./routes/api/users`)
const profile = require(`./routes/api/profile`)
const posts = require(`./routes/api/posts`)

const requireAuth = require(`./middlewares/requireAuth`)

const app = express();
// const port = process.env.PORT || 3000;
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api/users', users)

app.use(passport.initialize());
require('./config/passport')(passport);
// app.use('/api/profile', profile)
// app.use('/api/posts', posts)

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
