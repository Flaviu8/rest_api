import express from "express"
import coursesRoutes from "./src/courses/routes.js"


app.use(express.json())
const PORT = 5600

const app = express()


app.get('/', (req, res) =>{
    res.send('Homepage')
})

app.use('/courses', coursesRoutes)
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))