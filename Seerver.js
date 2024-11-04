import express, { urlencoded } from 'express';
import router from './Routes/routes.js';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from "body-parser";

import { protection } from './modules/auth.js';
import { creatUser, signin } from './handlers/User.js';

const app = express();
app.use (cors());
app.use(morgan('dev'));
app.use (urlencoded({extended:true}));
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.status(200).send('Hello World'); // Set status before sending response
});
app.use('/api',protection,router)
app.post('/user',creatUser)
app.post('/signin',signin)
export default app;
