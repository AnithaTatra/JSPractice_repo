const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//const envData = require("./env.json");


const app = express();
const port = process.env.port || 5000;

app.get('/testCheck' , async(req,res)=>{
   app.use(cors());
       res.send({status:'success'})
})
try {
    mongoose.connect( 'mongodb://localhost/emp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, () =>
      console.log("Database connected"));
  } catch (error) {
    console.log("could not connect");
  }
app.listen(port,()=>{

    console.log("server started  at 5000 port");
})