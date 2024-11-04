import { Router } from "express";
import { body, validationResult } from 'express-validator';

import { handleEroorInput, validateBookingInput, validateCarInput, validateRideInputt } from "../modules/middlewars.js";
import { createCar, deleteCar, getallCars, getCar, updateCar } from "../handlers/Cars.js";
import { createRide,getallRides ,updateRide} from "../handlers/Ride.js";
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
router.get("/ride",getallRides)

router.post ('/ride',createRide,validateRideInputt,handleEroorInput)
//router.put('/ride:/id',updateRide,validateRideInputt,handleEroorInput)
router.put('/ride/:id', updateRide);



//Booking



export default router;