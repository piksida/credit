const path = require('path');
const paymentRoutes = require('./routes/payment.js');
const PaymentModel = require('./models/payment.js');
const favicon = require('serve-favicon');
const compress = require('compression');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const mongodb = require('feathers-mongodb');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');

const app = express(feathers());

dotenv.config();

const server = app;
server.on('listening', () => console.log('App started'));

app.get('/', (req, res) => {
    res.send("Hello World!");
});

// Load app configuration
app.configure(configuration());
// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT
} = process.env;

const dbConnectionURL = {
    'LOCALURL': 'mongodb://mongo:27017/editor_db'
};

mongoose.connect(dbConnectionURL.LOCALURL, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL));
db.once('open', () => {
     console.log('Mongodb Connection Successful');
});

app.configure(express.rest());

module.exports = app;

app.post('/api', function(req, res) {
  console.log(req.body);
  PaymentModel.create({ paymentData: req.body}, function(err, data){
    if(err) {console.log(err);} else{ res.json({RequestId: data._id, Amount: req.body.cardAmount});}
})
});
