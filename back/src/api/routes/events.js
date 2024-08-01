const { isAuth } = require("../../middlewares/auth")
const { getEvents, getEventsById, createEvent, deleteEvent } = require("../controllers/events")

const eventRoutes = require("express").Router()


eventRoutes.get("/", getEvents)
eventRoutes.get("/:id", getEventsById)
eventRoutes.post("/", createEvent)
eventRoutes.delete("/:id", deleteEvent)

module.exports = eventRoutes