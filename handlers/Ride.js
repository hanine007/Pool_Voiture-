import prisma from "../db.js";
export const createRide = async (req, res) => {
    const { origin, destination, date, time, carId } = req.body;
    try {
        const ride = await prisma.ride.create({
            data: {
                origin,
                destination,
                date,
                carId, //afin de specifier la voiture qui va effectuer le trajet
                userId: req.user.id
            }
        });
        res.json({ data: ride });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de la création du trajet." });
    }
}



export const getallRides = async (req, res) => {
    try {
        const rides = await prisma.ride.findMany({
            include: {
                car: true,
                user: true,
                bookings: true,
              },
    });
        res.json({ data: rides });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de la récupération des trajets." });
    }
}


