const mongoose = require('mongoose')

const connect = async() => {
    try{
        await mongoose.connect('mongodb+srv://ejayawan22:bfkDbD3xtvYNt2yt@cluster0.quoojdd.mongodb.net/coffeedb?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('successfuly connected to mongodb')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connect;