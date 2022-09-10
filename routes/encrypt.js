const express = require('express');
const { encryptFile } = require('../controllers/encrypt_files');

const router = express.Router();


router.post('/encrypt', encryptFile);

module.exports = router;