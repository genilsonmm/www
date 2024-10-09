const calculadora = require('./calculadora')
const _ = require('lodash')

var temp = "Olá node"

console.log(temp)

console.log(calculadora.sum(3, 2))

const alunos = [
    {
        nome: 'Maria',
        nota: 8.5
    },
    {
        nome: 'João',
        nota: 6.5
    },
    {
        nome: 'Daniel',
        nota: 6.5
    }
]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log('Média: ', media)