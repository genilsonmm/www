const express = require('express')
const server = express()

const router = require('./config/router')

server.use(express.json())
server.use('/api', router)

const PORT = 8081
server.listen(PORT, ()=> {console.log('Server running...')})









