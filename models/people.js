const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    question:{
        type:String,
        require:true,
    },
    ans:{
        type:String,
        require:true,
        
    },
    options:{
        type:[String]
    }
});
module.exports=mongoose.model('Questions',schema);