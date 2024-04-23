import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ACCESS_TOKEN_SECRET } from "./../config/index.js"
import {User} from "./../models/user.model.js"
import jwt from "jsonwebtoken"


const verifyJWT = asyncHandler(async (req,res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
    
        if (!token) {
            throw new ApiError(401, "Unauthorised request")
        }
        const decodedToken = await jwt.verify(token,ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Unauthorised request")
    }
})


export {verifyJWT}