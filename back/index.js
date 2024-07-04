require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectDB } = require("./src/config/db")
const UserRoutes = require("./src/api/routes/user")
const classesRoutes = require("./src/api/routes/actividades")

const app = express()

app.use(express.json())
app.use(cors())
connectDB()

app.use("/api/v1/users", UserRoutes)
app.use("/api/v1/class", classesRoutes)

app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found")
})

app.listen(5000, () => {
    console.log("Servidor levantado en: http://localhost:5000");
})