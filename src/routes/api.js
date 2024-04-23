import { Router } from "express";
import {createFood, readFood, updateFood, deleteFood, readFoodOne} from "./../controllers/food.controller.js"

const router = Router();


router.post('/create' , createFood)
router.get('/read', readFood)
router.get('/read/:id', readFoodOne)
router.post('/update/:id', updateFood)
router.get('/delete/:id' , deleteFood)



export default router;