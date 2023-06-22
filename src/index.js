import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routers/index.routes.js";
import httpStatus from "http-status"

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
app.use(router)

app.get("/health", (req, res) => res.sendStatus(httpStatus.OK));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})