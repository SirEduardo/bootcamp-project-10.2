const User = require("../api/models/users")
const { verifyToken } = require("../utils/token")

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        const parsedToken = token.replace("Bearer ", "")

        const { id } = verifyToken(parsedToken)
        const user = await User.findById(id) 
        
        if(user.rol ==="admin"){
            user.password = null
            req.user = user
            next()
        }
    } catch (error) {
        return res.status(401).json("Unauthorized")
    }
} 

module.exports = { isAuth }
