const express = require('express');
const { createUser,} = require('../controller/feedbackController');

const router = express.Router();

// Use more RESTful naming conventions
router.post('/api/users', createUser);

module.exports = router;
