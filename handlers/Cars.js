import prisma from "../db.js";
// get all cars
export const getallCars = async (req, res) => {
    try {
        // Récupérer l'utilisateur avec ses voitures
        const user = await prisma.user.findFirst({
            where: { id: req.user.id }, // Utiliser l'ID de l'utilisateur dans la requête
            include: {
                cars: true // Inclure les voitures associées
            }
        });

        // Vérifier si l'utilisateur existe
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé, pas de voitures associées." });
        }

        // Retourner les voitures de l'utilisateur
        res.json({ data: user.cars }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de la récupération des voitures." });
    }
};







export const getCar = async (req, res) => {
    try {
        // Trouver la voiture associée à l'utilisateur
        const car = await prisma.car.findFirst({
            where: {
                id: req.params.id,
                ownerId: req.user.id 
            }
        });

        // Vérifier si la voiture existe
        if (!car) {
            return res.status(404).json({ message: "Voiture non trouvée ou vous n'avez pas accès à cette voiture." });
        }

        // Retourner la voiture trouvée
        res.json({ data: car });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de la récupération de la voiture." });
    }
};












//create car
export const createCar = async (req, res) => {

    const car = await prisma.car.create({
        data: {
            model : req.body.model,
            make : req.body.make,
            year : req.body.year,
            ownerId : req.user.id,
            isActive: req.body.isActive !== undefined ? req.body.isActive : true // Définit par défaut à true
        }

    })

    res.json({data:car})

}
// Update car
export const updateCar = async (req, res) => {
    try {
        const { model, make, year, isActive } = req.body;


        const updated = await prisma.car.update({
            where: {
                id: req.params.id,
                ownerId: req.user.id
            },
            data: {
                
                model,
                make,
                year,
                isActive: isActive !== undefined ? isActive : true
            }
        });

        res.json({ data: updated });
    } catch (error) {
        console.error(error);
            return res.status(404).json({ message: "Voiture non trouvée ou vous n'avez pas accès à cette voiture." });
        res.status(404).json({ error: "" });
    }
};

// Delete car
export const deleteCar = async (req, res) => {
    try {
        const deleted = await prisma.car.delete({
            where: {
                id: req.params.id,
                ownerId: req.user.id
            }
        });
        
        res.json({ data: deleted });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Car no trouver ou vs avez pas les permision ." });
    }
};
