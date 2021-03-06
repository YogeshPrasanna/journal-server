require('./models/User')
require('./models/Post')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport')
const cors = require('cors')

const users = require(`./routes/api/users`)
const profile = require(`./routes/api/profile`)
const posts = require(`./routes/api/posts`)

const requireAuth = require(`./middlewares/requireAuth`)

const app = express();
// const port = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api/users', users)
app.use('/api/posts', posts)

app.use(passport.initialize());
require('./config/passport')(passport);
// app.use('/api/profile', profile)
// app.use('/api/posts', posts)

const mongoUri = process.env.mongoURI
mongoose.connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

app.use(cors())

mongoose.connection.on('connected', () => {
    console.log("Connected to mongo instance")
})

mongoose.connection.on('error', (err) => {
    console.log("ERROR : ", err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email is: ${req.user.email}`)
});

var server_port = process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, () => {
    console.log(`App is running on port ${server_port} and host being ${server_host}`, app.get('env'));
})
