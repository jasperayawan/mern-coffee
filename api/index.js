const express = require('express')
const dotenv = require('dotenv')
const app = express();
const connect = require('../api/db') 

dotenv.config();
const port = process.env.PORT;

app.listen(port, () => {
    connect();
    console.log('server listening to port:', port);
})

//mongodb connection




