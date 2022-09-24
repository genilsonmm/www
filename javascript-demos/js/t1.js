/*
let valor1 = 30
let valor2 = 10

let soma = "A soma de valor1: " + valor1 + " + valor2: " + valor2 + " é: " 
                + (valor1 + valor2)

let soma2 = `A soma de valor1 ${valor1} + valor2 ${valor2} é ${valor1 + valor2}`
console.log(soma2)
*/

//let igual = 1 == 1

/*
if(1 === "1"){
    console.log("verdadeiro")
} else {
    console.log("falso")
}
*/

//console.log(igual)

/*
let array = [2, 4, 10, 50]
console.log(array)
console.log(array[0])

array[0] = 20
console.log(array)

array.push(100)
console.log(array)

function teste(){
    var message = "Mensagem var"
    let pessoa = {
        nome: "Fulano",
        cpf: "070.098.098-90"
    }
    console.log("estou na função")
    //console.log(message)

    return message
}

console.log(message)
console.log(pessoa)

pessoa.nome = "Maria da Silva"

console.log(pessoa)
*/

/*
let message = function(){
    return "Sou uma função"
}

function somar(valor1, valor2){
    return valor1 + valor2
}

console.log(message())
*/

let usuarios = [
    {
        nome: "Maria",
        idade: 30
    },
    {
        nome: "João",
        idade: 17
    }
]
usuarios.push({nome: "Daniel", idade: 24})

/*
for(let i = 0; i < usuarios.length; i++){
    if(usuarios[i].idade < 18){
        let usuario = usuarios[i]
        console.log(usuario)
    }
}
*/

let usuario = usuarios.filter(u => u.idade < 18)
console.log(usuario)


