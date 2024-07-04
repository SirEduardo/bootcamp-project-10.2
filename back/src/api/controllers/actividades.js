const Class = require("../models/actividades")

const getClasses = async (req, res, next) => {
    try {
        const classes = await Class.find()
        return res.status(200).json(classes) 
    } catch (error) {
        return res.status(400).json("No hay clases")
    }
}
const getClassById = async (req, res, next) => {
    try {
        const { id } = req.params
        const classes = await Class.findById(id)
        return res.status(200).json(classes) 
    } catch (error) {
        return res.status(400).json("Esa clase no existe")
    }
}
const postClasses = async (req, res, next) => {
    try {
        const newClasses = new Class(req.body)
        const classSaved = await newClasses.save()
        return res.status(200).json(classSaved)
    } catch (error) {
        return res.status(400).json("Error al añadir la clase")
    }
}
const updateClasses = async (req, res, next) => {
    try {
        const { id } = req.params
        const oldClasses = await Class.findById(id)

        const updatedData = { ...req.body }

        const updatedClass = await Class.findByIdAndUpdate(id, updatedData, { new: true })
        return res.status(200).json(updatedClass) 
    } catch (error) {
        return res.status(400).json("Error al actualizar la clase")
    }
}

const deleteClasses = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedClasses = await Class.findByIdAndDelete(id)
        return res.status(200).json(deletedClasses) 
    } catch (error) {
        return res.status(400).json("Error al eliminar la clase")
    }
}

module.exports = { getClasses, getClassById, postClasses, updateClasses, deleteClasses }