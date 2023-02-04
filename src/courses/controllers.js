import { pool } from "../../db"
import { getCoursesQuery } from "./queries"

export const getCourses = (req, res) => {
    // res.send('Our students')

    pool.query(getCoursesQuery, (error, results) => {
        if(error) throw error
    })

    res.status(200).json(results.rows)
}