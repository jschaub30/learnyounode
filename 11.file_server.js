var http = require('http')
var fs = require('fs')

var server = http.createServer( function (request, response){
    response.writeHead(200, { 'content-type': 'text/plain' })
    fstream = fs.createReadStream(process.argv[3])
    fstream.pipe(response)
})

server.listen(process.argv[2])
