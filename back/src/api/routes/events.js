const { isAuth } = require("../../middlewares/auth")
const { getEvents, getEventsById, createEvent } = require("../controllers/events")

const eventRoutes = require("express").Router()


eventRoutes.get("/", getEvents)
eventRoutes.get("/:id", getEventsById)
eventRoutes.post("/", [isAuth], createEvent)

module.exports = eventRoutes