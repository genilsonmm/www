const database = require('../data/database')
const {v4: uuidv4} = require('uuid')
const urlBase = '/books'

module.exports = (router) => {
    
    router.get(urlBase, (req, res)=>{
        res.json(database)
    })

    //localhost:3000/api/v1/books/2
    router.get(`${urlBase}/:id`, (req, res)=> {
        const id = req.params.id
       
        const book = database.find(b=> b.id == id)
        
        if(book == undefined){
            res.send('Livro não encontrado')
        }

        res.json(book)
    })

    router.post(urlBase, (req, res)=> {
        const book = {
            id: uuidv4(),
            title: req.body.title,
            author: req.body.author,
            pages: req.body.pages
        }
        console.log('Debug', book)
        database.push(book)
        res.json(book)
    })
}