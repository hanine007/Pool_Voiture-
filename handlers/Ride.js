import prisma from "../db.js";

export const createRide = async (req, res) => {
    const { origin, destination, date,  carId } = req.body  ;
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
// updateRide

export const updateRide = async (req, res) => {
    try {
        const { origin, destination, date, carId } = req.body; // Récupérer les données du corps de la requête

        // Vérifier si le trajet existe et appartient à l'utilisateur
        const updated = await prisma.ride.update({
            where: {
                id: req.params.id,
                userId: req.user.id, // Vérifier si l'utilisateur est le propriétaire du trajet
            },
            data: {
                origin: origin,         
                destination: destination, 
                date: date,             
                carId: carId,                
            },
        });

        res.json({ data: updated });
    } catch (error) {
        console.error(error);
        return res.status(404).json({ message: "Trajet non trouvé ou vous n'avez pas accès à cette voiture." });
    }
};




//getallRides

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


