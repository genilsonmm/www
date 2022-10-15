const http = require('http')

const server = http.createServer(function(request, response){

    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end('<h1>Ola node</h1>')
})

const port = 8080
server.listen(port, () => 
    console.log(`Server rodando na porta ${port}`))