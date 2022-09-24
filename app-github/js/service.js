const baseUrlApi = "https://api.github.com/users"

$(document).ready(()=> getData())

function getData(){
    $.ajax({
        url: baseUrlApi,
        type: 'GET'
        
    })
    .done(function(data){

        let users = []

        for(let i=0; i < data.length; i++){
            let user = {
                id: data[i].id,
                login: data[i].login,
                photo: data[i].avatar_url,
                link: data[i].html_url
            }
            users.push(user)
        }

        showUsers(users)
    })
}

function showUsers(users){
    
    for(let i=0; i< users.length; i++){
        
        let img = `<img src=${ users[i].photo } width=100 alt='photo'/>`
        let btn = `<a class='btn btn-primary' target='_blank' href=${ users[i].link }>Acessar</a>`

        $("#user-data").append("<tr>" +
                                    "<td>"+ users[i].id +"</td>" +
                                    "<td>" + img + "</td>" +
                                    "<td>" + users[i].login + "</td>" +
                                    "<td>" + btn + "</td>" +
                            + "</tr>")

    }
}