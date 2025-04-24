const express = require('express')
const server = express()

server.get('/', (request, response)=> {
    response.send('<h1>Olá express!</h1>')
})
const PORT = 3000
server.listen(PORT, ()=> { console.log(`Server rodando na porta ${PORT}`) })