const { getUsers, getUserById, registerUser, login, updateUser, deleteUser } = require("../controllers/user")

const UserRoutes = require("express").Router()

UserRoutes.get("/", getUsers)
UserRoutes.get("/:id", getUserById)
UserRoutes.post("/register", registerUser)
UserRoutes.post("/login", login)
UserRoutes.put("/:id", updateUser)
UserRoutes.delete("/:id", deleteUser)


module.exports = UserRoutes