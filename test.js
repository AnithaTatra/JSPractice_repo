const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.port || 4000;

app.get('/testCheck' , async(req,res)=>{
       console.log("Working");
       res.send({status:'success'})
})


app.listen(port,()=>{
    console.log("server started  at 4000 port");
})