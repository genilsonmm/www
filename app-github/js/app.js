$(document).ready(()=> iniciar())

const urlBase = "https://api.github.com/users"

function iniciar(login){
    let url = login ? `${urlBase}/${login}` : urlBase

    $.ajax({
        url: url,
        type: 'GET'
    })
    .done((dados)=>{ 
        if(login){
            showUser(dados)
        } else {
            const usuarios = prepararDados(dados)
            exibirUsers(usuarios)
        }
    })
}

function prepararDados(dados){
    let usuarios = []
    for(let i=0; i< dados.length; i++){
        const novoUsuario = formatUser(dados[i])
        usuarios.push(novoUsuario)
    }

    return usuarios
}

function showUser(user) {
    const userData = formatUser(user)
    console.log(userData)
}

function formatUser(user){
    return {
        id: user.id,
        login: user.login,
        photo: user.avatar_url,
        link: user.html_url
    }
}

function exibirUsers(users){
    for(let i=0; i< users.length; i++){
        
        const row = createRow(users[i])

        $("#user_data").append(row)
    }
}

function createRow(user){
    user.photo = `<img width='100' src=${user.photo} alt='user image' />`
    user.link = `<a href=${user.link} target='_blank'>link</a>`

    return `<tr>
                <td>${user.id}</td>
                <td>${user.photo}</td>
                <td>${user.login}</td>
                <td>${user.link}</td>
            </tr>`
}

$('button').click(() => {
    const input = $('input')
    const login = input.val()
    
    if(login) {
        iniciar(login)
        input.val('')
    } else {
        alert('Digite o login')
    }
})