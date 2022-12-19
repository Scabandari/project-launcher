import express from 'express';
import cors from 'cors';
import createRoutes from './api';

const routes = createRoutes();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));

app.get('/', (req, res) => {
  res.send(`Well done sir, client at: ${process.env.CLIENT_URL} `);
});

app.get('/err', (req, res) => {
  throw new Error('There was some error');
});

app.use(routes);

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});

export default server;
