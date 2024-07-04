const mongoose = require("mongoose")

const classSchema = mongoose.Schema(
    {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }
},
{
    timestamps: true,
    collection: "clases"
}
)

const Class = mongoose.model("clases", classSchema, "clases")
module.exports = Class