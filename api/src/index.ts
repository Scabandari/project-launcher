import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './api';

const app = express();
// Add middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: process.env.CLIENT_URL }));

app.get('/', (req, res) => {
  res.send(`Well done sir, client at: ${process.env.CLIENT_URL} `);
});

app.get('/err', (req, res) => {
  throw new Error('There was some error');
});

app.use(routes);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});

export default server;
