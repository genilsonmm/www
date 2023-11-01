const express = require('express')
const router = express.Router()

let alunos = require('../data/database')

router.get('/aluno', (res, req) => {
    req.json(alunos)
})

router.get('/aluno/:id', (req, res)=>{
    const id = req.params.id
    const alunoEncontrado = alunos.find(a=>a.id == id)
    res.json(alunoEncontrado)
})

router.put('/aluno', (req, res)=>{
    const id = req.body.id
    const alunoEncontrado = alunos.find(a=>a.id == id)
    alunoEncontrado.idade = req.body.idade
    alunoEncontrado.nome = req.body.nome
    res.json(alunoEncontrado)
})

router.post('/aluno', (req, res) => {
    const aluno = {
        id: alunos.length + 1,
        nome: req.body.nome,
        idade: req.body.idade
    }
    alunos.push(aluno)
    res.json(aluno)
})

router.delete('/aluno/:id', (req, res)=> {
    const novaCollection = alunos.filter(a=> a.id != req.params.id) 
    alunos = novaCollection
    res.send('Aluno removido')
})

module.exports = router