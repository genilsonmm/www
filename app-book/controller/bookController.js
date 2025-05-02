const books = require('../data/database')

const urlBase = '/book'

module.exports = (router) => {

    router.post(urlBase, (request, response)=> {
        const newBook = request.body
        
        books.push(newBook)

        response.json(newBook)
    })

    router.get(urlBase, (request, response)=> {
        response.json(books)
    })

    router.get(`${urlBase}/:id`, (request, response)=> {
        const id = request.params.id
        const book = books.find(b=>b.id == id)
        
        console.log(book)

        if(!book) {
            response.status(204).send()
        }

        response.json(book)
    })
}