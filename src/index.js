import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";

const app= express();
import MONGODBCONNECTION from "./db/db.js";

dotenv.config({path:'./env'});

MONGODBCONNECTION();

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("ERROR",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("MONGODB connection FAILED : ",error);
//         throw error;
//     }
// })()