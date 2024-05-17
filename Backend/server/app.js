const express=require("express")
const bodyParser=require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
    res.send("Server is running!"); // You can replace this with res.render() if you have a view to render
});


app.post("/sign",(req,res)=>{
    const email=req.body.uname;
    const password=req.body.psw;
    console.log(email);
    console.log(password);
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})
