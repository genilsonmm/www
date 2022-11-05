const express = require('express')
const server = express()

server.get('/ola', function(req, res, next){
    res.send('<h1>Olá node</h1>')
})

const port = 8080
server.listen(8080, ()=> {console.log('funcionando na porta ' + port )})