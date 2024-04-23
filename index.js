import 'dotenv/config'
import connectDB from "./src/db/connectDB.js"
import { app } from "./app.js"
import { PORT } from "./src/config/index.js";

// import dotenv from "dotenv"
// dotenv.config({
//     path: "./env"
// })


const port = PORT || 8080;

connectDB()
.then((res)=>{
    app.on("err",(error)=>{
        console.log("Error",error)
        throw error;
    })
    app.listen(port,()=>{
        console.log(`server is runnig successfully ${port}`)
    })
})
.catch((err)=>{
    console.log('db connection failed',err)
})