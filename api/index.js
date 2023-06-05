const express = require('express')
const dotenv = require('dotenv')
const app = express();
const connect = require('../api/db') 
const bodyParser = require('body-parser')
const cors = require('cors')
const User = require('../api/models/user.model')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const secret = 'ThIsMySeCrEthuhawhih';


dotenv.config();
const port = process.env.PORT;

/**middleware */
app.use(cors())
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
            password:bcrypt.hashSync(password,salt)
        })

        res.json(response);
    }
    catch(err){
        console.log(err)
    }
})

app.post('/login', async(req,res) => {
    const {email, password} = req.body;

    const userEmail = await User.findOne({email});
    const userPass = bcrypt.compareSync(password,userEmail.password);

    if(userPass){
        jwt.sign({email,id:userEmail._id}, secret, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token', token).json({id:userEmail._id,email,});
        })
    }else{
        res.status(400).json('wrong credentials');
    }
})






