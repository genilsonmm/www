const calcular = require('./calcular.js')
const _ = require('lodash')

console.log("Ola nodejs")

console.log(calcular.somar(3, 2))

const alunos = [
    {
        nome: 'Aluno1',
        nota: 4.5
    },
    {
        nome: 'Aluno2',
        nota: 8
    },
    {
        nome: 'Aluno3',
        nota: 7.5
    }
]

const soma = _.sumBy(alunos, 'nota')
console.log(soma)