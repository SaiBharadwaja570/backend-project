import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants";
import express from 'express';

const app = express();


// First approach ---- Everything in index
/*
// Using IIFE
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