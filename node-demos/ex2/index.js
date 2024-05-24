const express = require('express')
const server = express()

server.get('/', (request, response)=>{
    const n = 'Olá express'
    response.send(n)
})

const PORT = 3000

server.listen(PORT, ()=> {
    console.log(`Ouvindo na porta ${PORT}`)
})