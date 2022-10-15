const loadsh = require('loadsh')

const alunos = [
    {
        nome: "Fulano",
        nota: 4
    },
    {
        nome: "Maria",
        nota: 8
    },
    {
        nome: "João",
        nota: 6

    }
]

const media = loadsh.sumBy(alunos, 'nota') / alunos.length
console.log(media)