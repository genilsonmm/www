const urlBase = 'https://api.github.com/users'

$(document).ready(() => {

    $('#details').fadeOut()

    $.ajax({
        url: urlBase,
        type: 'GET'
    })
        .done((response) => {
            //console.log(response)
            const users = formatUsers(response)
            showUsers(users)
        })
})

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
    $('#home').fadeOut()
    $('#details').fadeIn(200)

    const login = $('#inputLogin').val()
    alert(login)
})

$('#init').click(()=>{
    $('#home').fadeIn()
    $('#details').fadeOut(200)
})