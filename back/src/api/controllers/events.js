

const getEvents = async (req, res, next) => {
    try {
        const events = await Event.find()
        return res.status(200).json(events)
    } catch (error) {
        return res.status(400).json("No hay eventos disponibles", error)
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
        return res.status(400).json("Error recogiendo el evento", error)
    }
}

const createEvent = async (req, res, next) => {
    try {
        const { title, date, location, description } = req.body
        const newEvent = new Event({ title, date, location, description })
        const event = await newEvent.save()
        return res.status(201).json(event)
    } catch (error) {
        return res.status(400).json("Error creando el evento", error)
    }
}


module.exports = { getEvents, getEventsById, createEvent }