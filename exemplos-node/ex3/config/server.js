const express = require('express')
const server = express()
require('dotenv').config()

const cors = require('cors')

server.use(cors())
server.use(express.json())

const PORT = process.env.PORT

server.listen(PORT, ()=> { `Rodando na porta ${PORT}` })

module.exports = server