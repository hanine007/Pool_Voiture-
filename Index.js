import app from "./Seerver.js";
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg; 
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Configuration de la connexion à la base de données
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

async function testerConnexion() {
    try {
        const client = await pool.connect();
        console.log('Connexion à la base de données réussie !');
        client.release(); // Libère la connexion une fois non nécessaire
    } catch (err) {
        console.error('Erreur de connexion à la base de données :', err);
    }
}

testerConnexion();
