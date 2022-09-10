const mongoose = require('mongoose');


const EncryptedFile = mongoose.Schema({

    fileName: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required:true
    },
    fileExtension: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: false
    },
    numberOfDownloads: {
        type: Number,
        default: 0
    },
    ipAddresses: []
    
}, { 
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000) 
    }
});

module.exports = mongoose.model('EncryptedFile', EncryptedFile);