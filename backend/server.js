const express=require('express')
const app=express();
const mongoose=require('mongoose');
require('cors');
require('dotenv').config()
const dbConfig=require("./config/dbConfig");
app.use(express.json());
const userRoute=require("./routes/userRoute");
const cors=require('cors');
app.use('/api/user',userRoute);
const port=process.env.port || 5000;

app.listen(port,()=> console.log(`Node server started at port ${port}`));
