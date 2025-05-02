require('dotenv').config()

const express = require('express')
const server = express()

const PORT = process.env.PORT || 8080

const cors = require('cors')
server.use(cors())
server.use(express.json())

server.listen(PORT, () => console.log(`Server running ${PORT}`))

module.exports = server