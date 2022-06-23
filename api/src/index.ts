import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Well done sir, your a boss babe!');
})

app.get('/err', (req, res) => {
    throw new Error('There was some error');
})

 const PORT = 8080;
 app.listen(PORT, () => {
     console.log(`The application is listening on port ${PORT}!`);
 })

