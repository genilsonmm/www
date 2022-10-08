const baseUrlApi = "https://api.github.com/users"

$(document).ready(()=> getData())

function getData(userName){

    let url = baseUrlApi

    if(userName){
        url += "/" + userName
        $("#page2").show()
        $("#page1").hide()
    } else {
        showPage1()
    }

    $.ajax({
        url: url,
        type: 'GET'    
    })
    .done(function(data){

        if(userName){
            formatUser(data)
        } else {
            formatUsers(data)
        }

    })
    .fail(function(msg){
       const error =  msg.responseJSON.message

       if(error === "Not Found"){
            //Modal
            showPage1()
       }

    })
}

function showPage1(){
    $("#avatar").empty()
    $(".card-title").empty()
    $("#page2").hide()
    $("#page1").show()
}

function formatUser(user){
     const formattedUser = getUser(user)

     const img = `<img src=${ formattedUser.photo } class='card-img-top' alt='photo'/>`
     const btn = `<a class='btn btn-primary' target='_blank' href=${ formattedUser.link }>Acessar</a>`

     clearCard()
     
     $("#avatar").append(img)   
     $(".card-title").append(formattedUser.login)
     $("#link").append(btn)
}

function clearCard(){
    $("#avatar").empty()
    $(".card-title").empty()
    $("#link").empty()
}

function formatUsers(data){
    let users = []

    for(let i=0; i < data.length; i++){    
        users.push(getUser(data[i]))
    }

    showUsers(users)
}

function getUser(user){
    return {
        id: user.id,
        login: user.login,
        photo: user.avatar_url,
        link: user.html_url
    }
}

function showUsers(users){
    
    for(let i=0; i< users.length; i++){
        
        const img = `<img src=${ users[i].photo } width=100 alt='photo'/>`
        const btn = `<a class='btn btn-primary' target='_blank' href=${ users[i].link }>Acessar</a>`

        $("#user-data").append("<tr>" +
                                    "<td>"+ users[i].id +"</td>" +
                                    "<td>" + img + "</td>" +
                                    "<td>" + users[i].login + "</td>" +
                                    "<td>" + btn + "</td>" +
                            + "</tr>")

    }
}

$("button").click(function(){
 
    const username = $("input").val()
 
    if(username)
    {
        getData(username)
        $("input").val("")
    } else {
        //Modal
    }
})

$("#home").click(function(){
    showPage1()
})