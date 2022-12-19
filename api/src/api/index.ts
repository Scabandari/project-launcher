import express from "express";
import users from "./users";

const router = express.Router();

const routes = () => {
  router.use("/api/users", users);

  return router;
};

export default routes;
