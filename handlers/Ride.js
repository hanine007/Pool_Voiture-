import prisma from "../db.js";
export const createRide = async (req, res) => {
    const { origin, destination, date, time, carId } = req.body;
    try {
        const ride = await prisma.ride.create({
            data: {
                origin,
                destination,
                date,
                carId,
                userId: req.user.id
            }
        });
        res.json({ data: ride });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de la création du trajet." });
    }
}






