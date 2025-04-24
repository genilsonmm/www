const loadsh = require('loadsh')

const alunos = [
    {
        nome: 'aluno 1',
        nota: 8.5
    },
    {
        nome: 'aluno 1',
        nota: 4.5
    },
    {
        nome: 'aluno 1',
        nota: 7
    }
]

const media = loadsh.sumBy(alunos, 'nota') / alunos.length
console.log(`Média: ${media}`)