import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    }
    catch(error){
        console.log("MONGODB connection error:", error);
        process.exit(1);
    }
}