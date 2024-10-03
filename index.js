import express from "express";
 
import dotenv from "dotenv";
import bodyparser from "body-parser";
import mongoose from "mongoose";


const app= express();

app.use(bodyparser.json());
dotenv.config();
const PORT=process.env.PORT;



mongoose.connect('mongodb+srv://AKIL:akilesh@cluster0.nk4i7.mongodb.net/members').then(() => {
    console.log("MongoDB connected"); 
});
app.listen(PORT,()=>{
    console.log("Server started..."+PORT);
    
});
