//alert("Sou um alert")
console.log("Olá javascript")

//true or false
console.log(1 === "1")

let nomes = ["Daniel", "Maria", "Joao"]
console.log(nomes)
console.log(nomes[0])

nomes.push("Fernando")
console.log(nomes)

nomes[2] = "João da Silva"

console.log(nomes)
nomes.pop()
console.log(nomes)

let x
console.log(x)

let usuario1 = {
    id: 1,
    nome: "Maria",
    idade: 20,
    contatos: [
        {
            tipo: 'TELEFONE',
            valor: '(83) 8787-8676'
        },
        {
            tipo: 'INSTAGRAM',
            valor: '@maria'
        },
        {
            tipo: 'EMAIL',
            valor: 'maria@gmail.com'
        }
    ]
}

let usuario2 = {
    id: 2,
    nome: "João",
    idade: 30,
    contatos: [
        {
            tipo: 'TELEFONE',
            valor: '(83) 8787-8676'
        },
        {
            tipo: 'INSTAGRAM',
            valor: '@maria'
        },
        {
            tipo: 'EMAIL',
            valor: 'maria@gmail.com'
        }
    ]
}

let usuario3 = {
    id: 3,
    nome: "José",
    idade: 45,
    contatos: [
        {
            tipo: 'TELEFONE',
            valor: '(83) 8787-8676'
        },
        {
            tipo: 'INSTAGRAM',
            valor: '@maria'
        },
        {
            tipo: 'EMAIL',
            valor: 'maria@gmail.com'
        }
    ]
}

let usuarios = []

function adicionarUsuarios(){
    usuarios.push(usuario1)
    usuarios.push(usuario2)
    usuarios.push(usuario3)
}

adicionarUsuarios()

console.log(usuarios)

console.log('---------------------------------------')
let usuarioEncontrado = usuarios.filter(u => u.idade > 20)
console.log(usuarioEncontrado)

console.log('---------------------------------------')

function somar(valor1, valor2){
    console.log(valor1 + valor2)
}

somar(10, 5)

const subtrair = function(valor1, valor2){
    return valor1 - valor2
}

console.log(subtrair(20, 3))

const novoUsuario = (nome, idade) => {
    return {
        id: 5,
        nome: nome,
        idade: idade
    }
} 

console.log(novoUsuario("Fulano da Silva", 23))


/*
console.log(usuario)
usuario.nome = "Maria da Silva"
console.log(usuario)
*/