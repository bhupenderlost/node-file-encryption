require('dotenv').config();
const express   = require('express');
const mongoose  = require('mongoose');

//DB USERNAME AND PASSWORD
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

let DATABASE = process.env.DATABASE;
DATABASE = DATABASE.replace("<user>", DB_USER);
DATABASE = DATABASE.replace("<password>", DB_PASS);

//PORT
const PORT = process.env.PORT;

//Init Express App
const app = express();

//Connect Database
mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex:true,
    ignoreUndefined: true
}).then(() => {
    console.log('DB CONNECTED...')
}).catch(err => console.log(err))

//Use Public Folder As Content Serving
app.use(express.static("public"));


//Start The Server
app.listen(PORT, () => {
    console.log(`Server Running At PORT: ${PORT}`);
});