const express = require('express');
const { encryptFile } = require('../controllers/encrypt_files');
const { uploadFile } = require('../utils/uploadFile');

const router = express.Router();


router.post('/encrypt', uploadFile.single('fileToBeEncrypted'), encryptFile);

module.exports = router;