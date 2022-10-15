const express = require('express')
const server = express()

server.get('/ola', function(req, res){
    res.send('<h1>Olá node</h1>')
})

server.listen(8080, ()=> {console.log('funcionando')})