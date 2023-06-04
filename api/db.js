const mongoose = require('mongoose')

const connect = async() => {
    try{
        await mongoose.connect('<url>',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }
    catch(err){
        console.log(err)
    }
}