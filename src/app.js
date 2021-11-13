'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

mongoose.connect(config.connectionString);

const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

const index = require('./routes/index');
const productsRoute = require('./routes/product');
const customerRoute = require('./routes/customer');
const orderRoute = require('./routes/order');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/products', productsRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;