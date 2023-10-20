const urlBase = 'https://api.github.com/users'

$(document).ready(() => {
    getData()
})

function getData(username){
    
    let url = urlBase

    if(username){
        //'https://api.github.com/users/username'
        url += `/${username}`
    }

    $('#details').fadeOut()

    $.ajax({
        url: url,
        type: 'GET'
    })
    .done((response) => {
        console.log(response)
        if(username){
            $('#home').fadeOut()
            $('#details').fadeIn(200)
            showUser(response)
        } else {
            $('#home').fadeIn()
            $('#details').fadeOut()
            const users = formatUsers(response)
            showUsers(users)
        }
    })
    .fail((error)=>{
        console.log(error)
        if(error.status == 403){
            $("#modal").modal('show')
            $("#message").html('Usuário inválido!')
        }
    })
}

function showUsers(users) {
    for (user of users) {
        const img = `<img src='${user.photo}' width=60 alt='photo'/>`
        const link = `<a href='${user.link}' target='_blank'>Ver</a>`
        const row = '<tr>' +
                        '<td>' + user.id + '</td>' +
                        '<td>' + img + '</td>' +
                        '<td>' + user.login + '</td>' +
                        '<td>' + link + '</td>' +
                    '</tr>'
        $('#user-data').append(row)
    }
}

function showUser(user){
    const login = `<h5 class='card-title'>${user.login}</h5>`
    const link = `<a href='${user.html_url}' target='_blank' class="btn btn-primary">Ver</a>`          
    const img = `<img src="${user.avatar_url}" class="card-img-top" alt="photo">`

    $("#img").html(img)
    $(".card-body").append(login)
    $(".card-body").append(link)
}

function formatUsers(data) {
    const users = []

    for (user of data) {
        const newUser = {
            id: user.id,
            login: user.login,
            photo: user.avatar_url,
            link: user.html_url
        }

        users.push(newUser)
    }

    return users
}

$('#search').click(()=>{
    const username = $('#inputLogin').val()

    if(username == ''){
        $("#modal").modal('show')
        $("#message").html('Digite o login do usuário github!')
    } else {
        $('#inputLogin').val('') 
        getData(username)
    }
})

$('#init').click(()=>{
    $('#home').fadeIn()
    $('#details').fadeOut(200)
})