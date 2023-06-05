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
app.use(cors({credentials:true,origin:'http://localhost:5173'}))
app.use(bodyParser.json())
app.use(cookieParser())
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

    if (userPass) {
        // Create JWT token
        const token = jwt.sign({ email: userEmail.email }, secret);
    
        // Set the token as a cookie
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 }); // Example: maxAge: 1 hour
    
        // Send a success response
        res.status(200).json({ message: 'Login successful' });
      } else {
        // Send an error response
        res.status(401).json({ message: 'Invalid email or password' });
      }
})

// Verify token middleware
function verifyToken(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
  
    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }
  
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to authenticate token' });
      }
  
      req.user = decoded;
      next();
    });
  }
  

// Protected route to get user information
app.get('/api/user', verifyToken, (req, res) => {
    // You can fetch the user's information from the database based on req.user.email
    const user = {
      email: req.user.email,
    };
  
    res.json({ user });
  });






