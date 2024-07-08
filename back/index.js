require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectDB } = require("./src/config/db")
const eventRoutes = require("./src/api/routes/events")
const attendeeRoutes = require("./src/api/routes/attendees")
const authRoutes = require("./src/api/routes/auth")
const userRoutes = require("./src/api/routes/users")

const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.use("/api/v1/events", eventRoutes)

app.use("/api/v1/attendees", attendeeRoutes)

app.use("/api/v1/auth", authRoutes)

app.use("/api/v1/users", userRoutes)

app.use("*", (req, res, next) =>{
    return res.status(404).json("Route not found")
})


app.listen(3000, () => {
    console.log("Servidor levantado en: http://localhost:3000");
})