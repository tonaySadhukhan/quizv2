const express=require('express');
const db=require('./db2');
const Questions=require('./models/people');


const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to Quiz game")
});
app.get('/get-question',async (req,res)=>{
        try{
            const data=await Questions.find();
            res.send(data);
        }catch(error){
            console.log(error);
        }
});

app.post('/set-question',async(req,res)=>{
    try{
        const data=req.body;
        const newData=new Questions(data);
        const response = await newData.save();
        res.status(200).json(response);
        console.log("data saved");
    }catch(error){
        console.log(error);
    }
});

app.listen(3500,()=>{
    console.log("server starting at 3000");
});