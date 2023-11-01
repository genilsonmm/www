const express = require('express')
const server = express()

server.use(express.json())

const alunos = require('./data/database')

server.get('/', (res, req) => {
    req.json(alunos)
})

server.get('/aluno/:id', (req, res)=>{
    const id = req.params.id
    const alunoEncontrado = alunos.find(a=>a.id == id)
    res.json(alunoEncontrado)
})

server.post('/', (req, res) => {
    const aluno = {
        id: alunos.length + 1,
        nome: req.body.nome,
        idade: req.body.idade
    }
    alunos.push(aluno)
    res.json(aluno)
})

const PORT = 8081
server.listen(PORT, ()=> {console.log('Server running...')})