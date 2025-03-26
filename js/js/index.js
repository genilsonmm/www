//const myDiv = document.getElementById('container').innerHTML

//console.log(myDiv)
const alunos = []

function addAluno() {
    const value = document.getElementById('inpName').value

    alunos.push({
        id: new Date().getTime(), nome: value
    })

    document.getElementById('inpName').value = ''
    console.log('Alunos: ', alunos)
}

$("button").click(()=> {
    const inputValue = $("#inpName").val()

    alunos.push({
        id: new Date().getTime(), nome: inputValue
    })

    $("#inpName").val("")
    showList()
})

function showList() {
    $("#list").html("")
    alunos.reverse()
    alunos.forEach(aluno => $("#list").append(`<p>${aluno.nome}</p>`))
}

