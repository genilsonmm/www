let database = require('../data/database')

function getBook(id) {
    return database.find(item => item.id === +id)
}

module.exports = (router) => {

    const urlBase = '/books'

    router.get(urlBase, (request, response) => { 
        response.json(database)
    })

    router.get(urlBase + '/:id', (request, response) => {
        const id = request.params.id
        const book = getBook(id)
        response.json(book)
    })

    router.post(urlBase, (request, response) => {

        const newBook = {
            id: database.length + 1,
            title: request.body.title,
            pages: request.body.pages
        }

        database.push(newBook)
        response.status(201).send(newBook)
    })

    router.put(urlBase, (request, response) => {
 
        const book = getBook(request.body.id)
        if(book == undefined){
            response.status(204).send() //NoContent
        }

        book.title = request.body.title
        book.pages = request.body.pages

        response.json(book)
    })

    router.delete(urlBase + '/:id', (request, response) => {
 
        const newList = database.filter(item => item.id != request.params.id)
        database = newList
        response.status(200).send('Livro removido com sucesso!')
    })
}