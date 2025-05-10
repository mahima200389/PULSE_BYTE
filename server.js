const express=require('express')
const app=express();
require('dotenv').config();
const mongoose=require('mongoose');
const port=process.env.port || 5000;


app.listen(port,()=> console.log(`Listening on port ${port}`));