const lodash = require('lodash')

const alunos = [
    {
        nome: 'Maria',
        nota: 5.6
    },
    {
        nome: 'João',
        nota: 8
    },
    {
        nome: 'Daniel',
        nota: 9
    }
]

const soma = lodash.sumBy(alunos, 'nota') 
console.log('A soma é ' + soma)

console.log('A média é: ' + soma / alunos.length)