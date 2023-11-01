const express = require('express')
const server = express()

/*
server.use(()=>{
    console.log('Teste')
    next()
})
*/

server.get('/', (request, response) => {
    response.send({nome: 'Fulano'})
})

server.get('/obterUsuarios', (request, response) => {
    const usuarios =[
        {nome: 'Fulano'},
        {nome: 'Maria'}
    ]
    response.json(usuarios)
})




server.listen(8081, ()=>{ console.log('Server rodando...') })