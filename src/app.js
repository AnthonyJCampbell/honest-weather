require('dotenv').config()

const express = require('express')
const server = express()
const port = process.env.PORT || 9000

server.get('/', (req, res) => {
    res.status(200).json({"message": "Server's alive!"})
})

server.listen(port, () => {
    console.log(`\n--- Server running on port ${port} ---`)
})