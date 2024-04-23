import express from "express"
const app = express();
import path from "path"
import { CORS_ORIGIN } from "./src/config/index.js";

//security libray require
import cors from "cors"
import helmet from "helmet"
import hpp from "hpp"
import cookieParser from "cookie-parser"
import mongoSanitize from "express-mongo-sanitize";
import { rateLimit } from 'express-rate-limit'

// CORS INITIAL
app.use(cors(
    {
        origin: CORS_ORIGIN,
        credentials: true,
    }
));

// SECURITY IMPLEMENTATION 
app.use(helmet());
app.use(hpp());
app.use(express.json({limit: "18kb"}));
app.use(express.urlencoded({extended: true, limit: "18kb"}));
app.use(cookieParser());

const limiter = rateLimit({windowMs: 15 * 60 * 1000, limit: 100})
app.use(limiter)
app.use(mongoSanitize());


//Routes import 
import router from "./src/routes/api.js";
//Route Implemtaiton
app.use("/api",router)

// // Frontend Connection
// app.use(express.static("client-site/dist"))
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"client-site","dist","index.html"))
// })

// Undefinded EndPoint
app.use("*",(req,res)=>{
    res.status(200).json({msg: "undefined endpoint"})
})

export {app}