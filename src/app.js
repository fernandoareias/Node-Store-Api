'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();


//mongoose.connect('mongodb://root:example@localhost:27017/');

const index = require('./routes/index');
const products = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('products/', products);
module.exports = app;