const express = require('express');
const { decryptFile, forgotSalt } = require('../controllers/encrypt_files');


const router = express.Router();

router.post('/decrypt', decryptFile);
router.post('/forgot', forgotSalt);

module.exports = router;