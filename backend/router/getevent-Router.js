const express = require('express');
const { getUser,} = require('../controller/eventController');

const router = express.Router();

// Use more RESTful naming conventions
router.get('/event', getUser);

module.exports = router;
