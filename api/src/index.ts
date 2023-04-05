import express from 'express';
import errorhandler from 'errorhandler';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './api';

const app = express();
// Add middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: process.env.CLIENT_URL }));

app.use(routes);

app.use(errorhandler());

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});

export default server;
