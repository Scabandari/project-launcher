import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));

app.get("/", (req, res) => {
  res.send(`Well done sir, client: ${process.env.CLIENT_URL} `);
});

app.get("/err", (req, res) => {
  throw new Error("There was some error");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});
