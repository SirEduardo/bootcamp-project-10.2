const Attendee = require("../models/attendees")


const getAttendee = async (req, res, next) => {
    try {
        const attendees = await Attendee.find().populate("events")
        return res.status(200).json(attendees)
    } catch (error) {
        return res.status(400).json("Error al recoger asistentes", error)
    }
}

const getAttendeeById = async (req, res, next) => {
    try {
        const { id } = req.params
        const attendee = await Attendee.findById(id)
        return res.status(200).json(attendee)
    } catch (error) {
        return res.status(400).json("Error al encontrar al asistente", error)
    }
}

const confirmAttendance = async (req, res, next) => {
    try {
        const { eventId } = req.params
        const attendee = await Attendee.findOne({ email: req.user.email })
        if (!attendee){
            attendee = new Attendee({ name: req.user.name, email: req.user.email })
        }
        attendee.push(eventId)
        await attendee.save()
        return res.status(200).json(attendee)
    } catch (error) {
        return res.status(400).json("server Error")
    }
}

module.exports = { getAttendee, getAttendeeById, confirmAttendance }