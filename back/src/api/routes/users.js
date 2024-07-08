const { isAuth } = require("../../middlewares/auth")
const { confirmAttendance } = require("../controllers/attendees")
const { createEvent } = require("../controllers/events")

const userRoutes = require("express").Router()

userRoutes.post("/events", [isAuth], createEvent)
userRoutes.post("/attendees/:eventId", [isAuth], confirmAttendance)

module.exports = userRoutes