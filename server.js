const express=require('express')
const app=express();
<<<<<<< HEAD
require('dotenv').config()
const dbConfig=require("./config/dbConfig");
const port=process.env.port || 5000;

app.listen(port,()=> console.log(`Node server started at port ${port}`));
=======
require('dotenv').config();
const mongoose=require('mongoose');
const port=process.env.port || 5000;


app.listen(port,()=> console.log(`Listening on port ${port}`));
>>>>>>> 2c9ea4a1b992054d813e41ed5ebc114d15fd8705
