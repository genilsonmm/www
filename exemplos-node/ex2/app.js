const express = require('express')
const server = express()

//localhost:8080/alunos
server.get('/alunos', (request, response) => {
    const aluno = {name: 'Maria', code: 1235}
    response.json(aluno)
})

server.get('/alunos/:id', (request, response) => {
    const aluno = {name: 'Maria', code: 1235}
    aluno['id'] = request.params.id

    response.json(aluno)
})

const PORT = 8080
server.listen(PORT, ()=> console.log(`Server iniciou na porta ${PORT}`))