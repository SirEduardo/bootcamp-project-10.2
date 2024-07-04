const { getClasses, getClassById, postClasses, updateClasses, deleteClasses } = require("../controllers/actividades")

const classesRoutes = require("express").Router()

classesRoutes.get("/", getClasses)
classesRoutes.get("/:id", getClassById)
classesRoutes.post("/", postClasses)
classesRoutes.put("/:id", updateClasses)
classesRoutes.delete("/:id", deleteClasses)

module.exports = classesRoutes