const express=require('express')
const cors=require('cors');
const app=express();
const mongoose=require('mongoose');

require('dotenv').config()
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));
const dbConfig=require("./config/dbConfig");
app.use(express.json());
const userRoute=require("./routes/userRoute");

app.use('/api/user',userRoute);
const port=process.env.port || 5000;

app.listen(port,()=> console.log(`Node server started at port ${port}`));
