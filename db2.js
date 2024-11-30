require('dotenv').config();
const mongoose =require('mongoose');
const mongoURL=process.env.mongourl;
mongoose.connect('mongodb+srv://user1:admin1234@quiz.ubwjo.mongodb.net/?retryWrites=true&w=majority&tls=true');
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to MongoDB server");
});

db.on('error',(error)=>{
    console.log(error);
});

db.on('disconnected',()=>{
    console.log("Disconnected");
});
module.exports=db;