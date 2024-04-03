$(document).ready(()=> iniciar())

const urlBase = "https://api.github.com/users"

function iniciar(){
    $.ajax({
        url: urlBase,
        type: 'GET'
    })
    .done((dados)=>{ 
        const usuarios = prepararDados(dados)
        console.log(usuarios)
    })
}

function prepararDados(dados){
    let usuarios = []
    for(let i=0; i< dados.length; i++){
        const novoUsuario = {
            id: dados[i].id,
            login: dados[i].login,
            foto: dados[i].avatar_url,
            link: dados[i].html_url
        }
        usuarios.push(novoUsuario)
    }

    return usuarios
}