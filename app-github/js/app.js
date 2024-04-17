$(document).ready(()=> init())

const urlBase = "https://api.github.com/users"

function init(login){
    let url = login ? `${urlBase}/${login}` : urlBase

    $.ajax({
        url: url,
        type: 'GET'
    })
    .done((data)=>{ 
        if(login){
            $("#page2").show()
            $("#page1").hide()
            showUser(data)
        } else {
            $("#page1").show()
            $("#page2").hide()
            const users = prepararDados(data)
            showUsers(users)
        }
    })
    .fail((error)=>{
        const errorMsg = error.responseJSON.message
        if(errorMsg === 'Not Found'){
            showModal('Usuário inválido')
        } else {
            showModal('Falha ao obter dados do usuário')
        }
    })
}

function prepararDados(data){
    let users = []
    for(let i=0; i< data.length; i++){
        const newUser = formatUser(data[i])
        users.push(newUser)
    }

    return users
}

function showUser(user) {
    const userData = formatUser(user)
    const img = `<img src="${userData.photo}" class="card-img-top" alt="photo">`
    const link = `<a href="${userData.link}" class="btn btn-primary" target="_blank">Acessar</a>`
    const cardContent = 
            `<div class="card-body">
                ${img}
                <h5 class="card-title"></h5>
                ${link}               
            </div>`
    $(".card").html(cardContent)
}

function formatUser(user){
    return {
        id: user.id,
        login: user.login,
        photo: user.avatar_url,
        link: user.html_url
    }
}

function showUsers(users){
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

function showModal(message){
    $("#notice-modal").modal("show")
    $(".modal-body").html(`<h4>${message}</h4>`)
}

$('button').click(() => {
    const input = $('input')
    const login = input.val()
    
    if(login) {
        init(login)
        input.val('')
    } else {
        showModal("Digite o login")
    }
})

$("#previous").click(()=>{
    $("#page1").show()
    $("#page2").hide()
})