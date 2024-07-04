const mongoose = require("mongoose")

const assistSchema = mongoose.Schema(
    {
        userName: { type: String, required: true },
        email: { type: String, required: true },
        classes: { type: mongoose.Types.ObjectId, ref: "clases" }
    },
    {
        timestamps: true,
        collection: "assists"
    }
)

const Assist = mongoose.model("assists", assistSchema, "assists")
module.exports = Assist