// require('dotenv').config({path: './env'})
// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants";
// import express from 'express';

import dotenv from 'dotenv';
import connectDB from "./db/indexdb.js";

dotenv.config({
    path: './env'
})



connectDB()


// First approach ---- Everything in index
/*
// Using IIFE

const app = express();
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", () =>{
            console.log("Error: ",  error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Listening at PORT: ${process.env.PORT}`)
        })
    }
    catch(err){
        console.error("ERROR: ", err);
    }
})() 
*/    