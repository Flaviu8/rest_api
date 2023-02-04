import express from "express";
import { getCourses } from "./controllers.js";
import { CreateScore } from "./queries.js";
import { pool } from "../../db.js"


const router = express.Router()


router.get('/', getCourses )


router.post('/', (req, res) => {
    const { scores } = req.body

    pool.query(CreateScore, [ scores ], (error, result)=> {
     if (error) {
       res.status(500).send({ message: error.message });
       return;
     }
     res.status(201).send({ message: 'Score created', scores: final_score });
   }
 )
})
 


export default router