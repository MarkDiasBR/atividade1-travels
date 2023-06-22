import express from "express"
import travelsRouter from "./travels.routes.js"

const router = express.Router()

router.use(travelsRouter)

export default router