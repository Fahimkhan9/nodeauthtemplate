import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';




const port=process.env.PORT;
connectDB();
const app=express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users",userRoutes)

app.get("/",(req,res)=>res.send("server ready"))

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>console.log("server started"))