const server = require('./config/server')
const router = require('./config/router')

server.use('/api/v1', router)