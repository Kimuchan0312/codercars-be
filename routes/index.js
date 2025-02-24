const express = require('express');
const router = express.Router();

// CAR
const carAPI = require('./car.api.js');
router.use('/cars', carAPI);

module.exports = router;
