import express from "express";
import { getCourses } from "./controllers.js";

const router = express.Router()


router.get('/', getCourses )


export default router