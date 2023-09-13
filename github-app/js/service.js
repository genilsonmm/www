const urlBase = 'https://api.github.com/users'

$(document).ready(()=> {

    $.ajax({
        url: urlBase,
        type: 'GET'
    })
    .done((response)=>{
        //console.log(response)
        const users = formatUsers(response)
        showUsers(users)
    })  
})

function showUsers(users){
    for(user of users){
        const row = '<tr>'+
                        '<td>' + user.id  + '</td>' +
                        '<td>' + + '</td>' +
                        '<td>' + user.login + '</td>' +
                        '<td>Ver</td>' +
                    '</tr>'
        $('#user-data').append(row)
    }
}

function formatUsers(data){
    const users = []

    for(user of data){
        const newUser = {
            id: user.id,
            login: user.login,
            photo: user.avatar_url
        }

        users.push(newUser)
    }

    return users
}