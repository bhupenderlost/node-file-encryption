const EncryptedFile = require('../models/encrypt_files');

const crypto = require('crypto');
const fs = require('fs');

exports.encryptFile = (req, res) => {

    const { originalname, mimtype, filename } = req.file;

    const buff          = fs.readFileSync(req.file.path);
    const base64File    = buff.toString('base64');
    const key           = crypto.randomBytes(32);
    const iv            = crypto.randomBytes(16);

    let cipher          = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted       = cipher.update(base64File);
    // Using concatenation
    encrypted = Buffer.concat([ encrypted, cipher.final() ]);
   
    // Returning iv and encrypted data
    const data = { 
        iv: iv.toString('hex'),
        encryptedData: encrypted.toString('hex') 
    };

    fs.writeFile("tmp/" + originalname + '.enc', JSON.stringify(data.encryptedData), (err) => {
        if(err) {
            return res.status(400).json({
                error: true,
                message: "Can't Encrypt The File!",
                errorMessage: err
            });
        }
        res.json({
            success: true,
            message: "File Encrypted Successfully!",
            message_two: "File Will Download Soon!",
            key: data.iv
        });
        res.download('tmp/' + originalname + '.enc');
    });
    
    

}

exports.decryptFile = (req,res) => {


}

exports.forgotSalt = (req, res) => {


}

