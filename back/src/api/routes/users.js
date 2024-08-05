const { isAuth } = require("../../middlewares/auth")

const { createEvent } = require("../controllers/events")

const userRoutes = require("express").Router()

userRoutes.post("/events", [isAuth], createEvent)


module.exports = userRoutes