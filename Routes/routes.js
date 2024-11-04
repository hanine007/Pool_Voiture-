import { Router } from "express";
import { body, validationResult } from 'express-validator';

import { handleEroorInput, validateBookingInput, validateCarInput, validateRideInputt } from "../modules/middlewars.js";
import { createCar, deleteCar, getallCars, getCar, updateCar } from "../handlers/Cars.js";
const router = Router();
//Car
router.get("/",(req,res)=>{
res.json({message:"Hello World"})
})

router.get("/car",getallCars)

router.get("/car/:id",getCar)



router.put ("/car/:id",updateCar,validateCarInput, handleEroorInput )

router.post("/car",createCar,validateCarInput, handleEroorInput)



router.delete("/car/:id", deleteCar);





// Ride
router.get("/ride",(req,res)=>{

})

router.post("/ride",validateRideInputt,handleEroorInput,(req,res)=>{

})

router.put("/ride:/id",validateRideInputt,handleEroorInput)



//Booking
router.get("/booking",(req,res)=>{

})
router.get("/booking/:id",(req,res)=>{

})

router.post("/booking",validateBookingInput,handleEroorInput,(req,res)=>{

})
router.delete("/booking",(req,res)=>{

})
router.put("/booking/:id",  validateBookingInput,
handleEroorInput)


export default router;