import prisma from "../db.js";
export const Booking= async (req, res) => {
    try {
      const { rideId } = req.body;
      const userId = req.user.id;  
  
      // Vérifiez la disponibilité du trajet avec la voiture associée
      const ride = await prisma.ride.findUnique({
        where: { id: rideId },
        include: { car: true },
      });
  
      if (!ride) {
        return res.status(404).json({ error: 'Trajet non trouvé' });
      }
  
      // Vérifiez si la voiture est active
      if (ride.car.isActive) {
        return res.status(400).json({ status: 'REJECTED', message: 'La voiture est  active' });
      }
  
      // Vérifiez le nombre de réservations existantes
      const bookingsCount = await prisma.booking.count({
        where: { rideId },
      });
  
      // Calculez le nombre de places disponibles
      const availableSeats = ride.car.seats - bookingsCount;
  
      // Gérer la réservation en fonction de la disponibilité des places
      if (availableSeats > 0) {
        // Place disponible, réservation acceptée
        const newBooking = await prisma.booking.create({
          data: {
            rideId,
            userId,
            status: 'ACCEPTED',
          },
        });
        return res.status(201).json({ status: 'ACCEPTED', booking: newBooking });
      } else {
        // Pas de place disponible, réservation en attente
        const newBooking = await prisma.booking.create({
          data: {
            rideId,
            userId,
            status: 'PENDING',
          },
        });
        return res.status(201).json({ status: 'PENDING', booking: newBooking });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
    }
  }
  