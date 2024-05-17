const mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost:27017/jwt_db");
mongoose.connection.on("connected",()=>{
    console.log("connected to mongo");
});
mongoose.connection.on("error",(err)=>{
    console.log('connection failed to mongo : ${err}');
});
module.exports=mongoose;
