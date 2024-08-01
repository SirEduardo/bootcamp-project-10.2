const Event = require("../models/events")


const getEvents = async (req, res, next) => {
    try {
        const events = await Event.find()
        if (!events.length) {
            return res.status(404).json({ message: "No hay eventos disponibles" })
        }
        return res.status(200).json(events)
    } catch (error) {
        return res.status(400).json({ message: "Error al obtener eventos", error })
    }
}

const getEventsById = async (req, res, next) => {
    try {
        const { id } = req.params
        const event = await Event.findById(id)
        if(!event){
            return res.status(404).json("Evento no encontrado")
        }
        return res.status(200).json(event)
    } catch (error) {
        return res.status(400).json({ message: "Error recogiendo el evento", error })
    }
}

const createEvent = async (req, res, next) => {
    try {
        const { title, date, location, description } = req.body
        const newEvent = new Event({ title, date, location, description })
        const event = await newEvent.save()
        return res.status(201).json(event)
    } catch (error) {
        return res.status(400).json({ message: "Error creando el evento", error })
    }
}

const deleteEvent = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedEvent = await Event.findByIdAndDelete(id)
        return res.status(200).json(deletedEvent)
    } catch (error) {
        return res.status(400).json("Error al eliminar el evento")
    }
}


module.exports = { getEvents, getEventsById, createEvent, deleteEvent }