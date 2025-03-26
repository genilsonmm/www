const urlBase = 'https://api.github.com/users'

//https://api.github.com/users/genilsonmm

$(document).ready(() => getUsers())

function getUsers() {
    const config = {
        url: urlBase,
        type: 'GET'
    }
    
    $.ajax(config).done((response) => {
        console.log(response)
        showUser(response)
    })
}

function showUser(users) {

    users.forEach(element => {
        const img = `<img src='${element.avatar_url}' width=120 />`
        const url = `<a href='${element.html_url}' target='_blank'>Acessar</a>`
        $('#user_container').append(
            '<tr>'
                + `<td>${element.id}</td>`
                + `<td>${img}</td>`
                + `<td>${element.login}</td>`
                + `<td>${url}</td>`
            + '</tr>'
        )
    });
}