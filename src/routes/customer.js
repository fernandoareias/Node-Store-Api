'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/customer-controller');

router.get('/admin', controller.get);
router.get('/:id', controller.getById);
router.post('/login', controller.post);
router.delete('/:id', controller.delete);

module.exports = router;