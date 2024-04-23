import { foodModel } from "../models/food.model.js";



//create food
const createFood = (req,res)=>{
    const reqBody = req.body

    foodModel.create(reqBody).then((result)=>{
        res.status(200).json({status:'success', data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}

//read all food
const readFood=(req,res)=>{
    let reqBody = req.body
    foodModel.find(reqBody).then((result)=>{
        res.status(200).json({status:'success',data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}

//read one food
const readFoodOne=(req,res)=>{
    let reqBody = req.body
    let {id} = req.params
    foodModel.findOne({_id:id},reqBody).then((result)=>{
        res.status(200).json({status:'success',data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}

//update food
const updateFood=(req,res)=>{
    let reqBody = req.body
    let {id} = req.params
    foodModel.updateOne({_id:id},reqBody).then((result)=>{
        res.status(200).json({status:'success',data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
    // console.log(id)
}

//delete food
const deleteFood=(req,res)=>{
    let reqBody = req.body 
    let {id} = req.params
    foodModel.deleteOne({_id:id},reqBody).then((result)=>{
        res.status(200).json({status:'success', message:'successfully delete complete'})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}

export{createFood,readFood,readFoodOne,updateFood,deleteFood}