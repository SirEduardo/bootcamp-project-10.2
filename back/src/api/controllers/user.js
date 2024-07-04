const { generateToken } = require("../../utils/token");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json("No se encontraron usuarios");
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json("Error al encontrar al usuario");
  }
};

const registerUser = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      rol: "user",
    });
    const userExist = await User.findOne({ userName: req.body.userName });
    if (userExist) {
      return res.status(400).json("Este usuario ya existe");
    }
    const userSaved = await newUser.save();
    return res.status(201).json(userSaved);
  } catch (error) {
    return res.status(400).json("Error al registrar usuario");
  }
};

const login = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(400).json("Usuario o contraseña incorrectos");
    }

    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user._id);
      return res.status(200).json({ user, token });
    }
    return res.status(400).json("Usuario o contraseña incorrectos");
  } catch (error) {
    return res.status(400).json("Error en el login");
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newUser = new User({
      rol: req.body.rol,
    });
    newUser._id = id;
    const updatedUser = await User.findByIdAndUpdate(id, newUser, {
      new: true,
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json("Error actualizando al usuario");
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(400).json("Error al eliminar al usuario");
  }
};

module.exports = {
  getUsers,
  getUserById,
  registerUser,
  login,
  updateUser,
  deleteUser,
};
