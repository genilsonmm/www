console.log("Olá script")

function iniciar(msg, numero){
    console.log(msg, numero)
    return "meu retorno"
}

const retorno = iniciar("Ola função iniciar", 20)
console.log(retorno)

let minhaFuncao = function(){
    return "Função sem nome"
}

console.log(minhaFuncao)

let minhaOutraFuncao = () => {
    return 20 + 30
}

function media(aluno){
    
}

const aluno1 = {
    nome: "Fulano",
    nota: 6
}

const aluno2 = {
    nome: "Fulano",
    nota: 7
}
const aluno3 = {
    nome: "Fulano",
    nota: 9
}

const alunos = []
alunos.push(aluno1)
alunos.push(aluno2)
alunos.push(aluno3)
console.log(alunos)

let result = alunos.filter(a => a.nota >= 7)
console.log(result)

let result2 = alunos.find(a => a.nota >= 7)
console.log(result2)

let alunoTemp = null
for(let i=0; i< alunos.length; i++){
    if(alunos[i].nota >= 7){
        alunoTemp = alunos[i]
        break
    }
}
console.log(alunoTemp)


