const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/test-manger-api",(error,result)=>{
    if(error){
        console.log("unable to connect");
    }else{
        console.log("connected");
    }
})
