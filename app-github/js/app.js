const url = "http://localhost:3000/api/v1/books"

$(document).ready(()=> {
    iniciar()
})

function iniciar() {

    $.ajax({
        url: url,
        type: "GET"
    })
    .done((response)=>{
        console.log(response)
        //const usuarios = obterUsuarios(response)
        //exibirUsuarios(usuarios)
    })

}

function exibirUsuarios(usuarios){
    for(let i=0; i<usuarios.length; i++){

        const linha = `
                    <tr>
                        <td>${usuarios[i].id}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
        `

        $("#usuarios").append(linha)
    }
}

function obterUsuarios(dados) {
    const usuarios = []
    for(let i=0; i<dados.length; i++){
        usuarios.push({
            id: dados[i].id,
            foto: dados[i].avatar_url,
            link: dados[i].html_url,
            login: dados[i].login
        })
    }

    return usuarios
}

$("#btnSearch").click(()=> {
    const login = $("#userInp").val()
    //alert(login)

    //$("#userInp").val("Texto adicionado!!!!")
    if(login == "") {
        $("#exampleModal").modal("show")
        $(".modal-body").html("Digite um usuário válido!")
    }
})