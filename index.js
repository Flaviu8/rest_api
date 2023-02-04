import express from "express"
import coursesRoutes from "./src/courses/routes.js"
import scoreRoutes from "./src/courses/routes.js"

const app = express()

app.use(express.json())
const PORT = 5600




app.get('/', (req, res) =>{
    res.send('Homepage')
})

app.use('/score', coursesRoutes)
app.use('/score', scoreRoutes)
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))