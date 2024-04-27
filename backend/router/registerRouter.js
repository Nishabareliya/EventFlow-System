const express = require('express');
const {
    createUser, login
  
} = require('../controller/registerController');

const router = express.Router();

// Use more RESTful naming conventions
router.post('/api/users', createUser);
router.post('/api/login', login);





module.exports = router;

