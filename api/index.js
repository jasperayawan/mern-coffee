const express = require('express')
const dotenv = require('dotenv')
const app = express();
const connect = require('../api/db') 
const bodyParser = require('body-parser')
const User = require('../api/models/user.model')

dotenv.config();
const port = process.env.PORT;

/**middleware */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.listen(port, () => {
    connect();
    console.log('server listening to port:', port);
})


app.post('/register', async(req,res) => {
    const {username,email,password} = req.body;

    try{
        const response = await User.create({
            username: username,
            email: email,
            password: password
        })

        res.json(response);
    }
    catch(err){
        console.log(err)
    }
})






