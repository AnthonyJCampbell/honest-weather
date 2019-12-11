const router = require('express').Router()

const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router')

server.use('/auth', authRouter)
server.use('/users', usersRouter)

// Check server status
server.get('/', (req, res) => {
    res.status(200).json({"message": "Server's alive!"})
})

module.exports = router