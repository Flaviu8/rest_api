import express from "express";
import { pool } from "../../db";
import { getCourses } from "./controllers";

const router = express.Router()


router.get('/', getCourses )