const alunos = []

addAluno({
    id: 1,
    nome: 'Maria',
    nota: 5.5
})

addAluno({
    id: 2,
    nome: 'João',
    nota: 6.0
})

addAluno({
    id: 3,
    nome: 'Pedro',
    nota: 9.0
})

function addAluno(aluno) {
    alunos.push(aluno)
}

let soma = 0

for(let i=0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
}

console.log('Média: ', soma / alunos.length)


console.log(alunos)
//Obter alunos nota >= 7
/*
const alunosNaMedia = []

for(let i=0; i < alunos.length; i++) {
    if(alunos[i].nota >= 7.0) {
        alunosNaMedia.push(alunos[i])
    }
} 

console.log('lunos na média: ', alunosNaMedia)
*/

const alunosNaMedia = alunos.filter(aluno => aluno.nota >= 6.0)
console.log('lunos na média: ', alunosNaMedia)

const alunoEncontrado = alunos.find(aluno => aluno.nota >= 6.0)
console.log('Aluno encontrado: ', alunoEncontrado)

