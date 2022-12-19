import express from "express";

import Users from "./controller";
const router = express.Router();

router.get("/", [], Users.getAll);

export default router;
