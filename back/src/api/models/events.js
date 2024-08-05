const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        date: { type: Date, required: true },
        location: { type: String, required: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
        attendees: [{ type: mongoose.Types.ObjectId, ref: "attendees" }]
    },
    {
        collection: "events"
    }
)

const Event = mongoose.model("events", eventSchema, "events")
module.exports = Event