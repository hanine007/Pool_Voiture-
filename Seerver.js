import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World'); // Set status before sending response
});



export default app;
