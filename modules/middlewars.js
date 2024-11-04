import {validationResult,body,check} from "express-validator";

export const handleEroorInput =async (req,res,next)=>{


const errors = validationResult(req);
        if (!errors.isEmpty()){
               return res.status(400).json({ errors: errors.array() });
           }
           else{
            next ();
           }
        }

         export const validateCarInput = [
            check("model")
        .isLength({ min: 3 })
        .withMessage("Le nom du modèle doit contenir au moins 3 caractères"),
    check("make")
        .isString()
        .withMessage("Veuillez fournir un nom valide"),
    check("year")
        .isLength({ min: 4, max: 4 })
        .isNumeric()
        .withMessage("Donnez une année valide")
          ];


          
         export const validateRideInputt =   [
            body("origin")
              .isLength({ min: 3 })
              .withMessage("Le départ  doit contenir au moins 3 caractères"),
            body("destination")
              .isString()
              .withMessage("Veuillez fournir un nom valide"),
            body("DateTime")
            .isInt({ min: 1990, max: 2025 })
              .isISO8601()
              .withMessage("La date doit être au format ISO8601 (YYYY-MM-DD).")
          ]
         export const validateBookingInput = [  body('status')
            .isIn(['PENDING', 'ACCEPTED', 'REJECTED'])
            .withMessage("Le champ 'status' doit être l'un des suivants : PENDING, ACCEPTED, REJECTED."),
        ]