const { isAuth } = require("../../middlewares/auth")
const { getAttendee, getAttendeeById, confirmAttendance } = require("../controllers/attendees")

const attendeeRoutes = require("express").Router()


attendeeRoutes.get("/", getAttendee)
attendeeRoutes.get("/:id", getAttendeeById)
attendeeRoutes.post("/:eventId", [isAuth], confirmAttendance)


module.exports = attendeeRoutes