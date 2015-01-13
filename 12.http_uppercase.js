var http = require('http');
var map = require('through2-map')

server = http.createServer(function (req, res){
    if (req.method != 'POST')
      return res.end('post only\n')

       // res.writeHead(200, { 'content-type': 'text/plain' })
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(res)
})

server.listen(process.argv[2])
