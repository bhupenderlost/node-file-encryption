require('dotenv').config();
const express   = require('express');
const mongoose  = require('mongoose');

//Route Imports
const encryptRoutes = require('./routes/encrypt');
const decryptRoutes = require('./routes/decrypt');

//DB USERNAME AND PASSWORD
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

let DATABASE = process.env.DATABASE;
DATABASE = DATABASE.replace("<user>", DB_USER);
DATABASE = DATABASE.replace("<password>", DB_PASS);
//c8jTdrlbHlzpD7Ta
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

//Routes
app.use('/api/v1', encryptRoutes);
app.use('/api/v2', decryptRoutes);

//Start The Server
app.listen(PORT, () => {
    console.log(`Server Running At PORT: ${PORT}`);
});