import { Router } from "express";

import { handleEroorInput, validateCarInput, validateRideInputt } from "../modules/middlewars.js";
import { createCar, deleteCar, getallCars, getCar, updateCar } from "../handlers/Cars.js";
import { createRide,getallRides ,updateRide} from "../handlers/Ride.js";
import { Booking } from "../handlers/Booking.js";
const router = Router();
//Car
router.get("/",(req,res)=>{
res.json({message:"Hello World"})
})

router.get("/car",getallCars)

router.get("/car/:id",getCar)

router.put ("/car/:id",validateCarInput, handleEroorInput,updateCar )

router.post("/car",validateCarInput, handleEroorInput,createCar)

router.delete("/car/:id", deleteCar);

// Ride
router.get("/ride",getallRides)

router.post ('/ride',validateRideInputt,handleEroorInput,createRide)
router.put('/ride/:id', validateRideInputt,handleEroorInput, updateRide);



//Booking
router.post('/booking',Booking)


export default router;