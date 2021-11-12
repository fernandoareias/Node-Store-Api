'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const router = express.Router();

// Carregar as rotas

const index = require('./routes/index');
const products = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('products/', products);
module.exports = app;