const express = require('express');
const { getUser,} = require('../controller/galleryController');

const router = express.Router();

// Use more RESTful naming conventions
router.get('/api', getUser);

module.exports = router;
