import { Router } from "express"
import express from "express";
import { getTravels } from "../controllers/travels.controller.js"

const travelsRouter = express.Router();

travelsRouter.get("/passengers/travels", getTravels);

export default travelsRouter;