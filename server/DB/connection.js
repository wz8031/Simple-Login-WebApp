const mongoose = require('mongoose');


const URI = "mongodb+srv://newuser1:newuser1@cluster0.xy9gn.mongodb.net/readWriteAnyDatabase?retryWrites=true&w=majority";

const connectDB = async() =>{
    await mongoose.connect(URI,{useNewUrlParser: true,
        useUnifiedTopology: true});
    console.log('db connected!')
}

module.exports = connectDB;