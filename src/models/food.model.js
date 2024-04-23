import mongoose from "mongoose"

const databaseSchema = mongoose.Schema({
    ProductName:{type:String},
    ProductCode:{type:String},
    Img:{type:String},
    Category:{type:String},
    Price:{type:String},
    Qty:{type:String},
    CreatedDate:{type:Date, default:Date.now()}
},{timestamps:true,versionKey:false})

const foodModel = mongoose.model('foodProducts', databaseSchema)
export {foodModel}