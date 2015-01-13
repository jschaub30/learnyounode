var http = require('http')
var strftime = require('strftime')

server = http.createServer( function (req, res) {
    //console.log(req.url)
    d = new Date(req.url.split('=')[1])
    if(req.url.search("/api/unixtime")>-1){
        t = {'unixtime': d.getTime()}
    } else if (req.url.search("/api/parsetime")>-1) {
    t = {
        "hour": d.getHours(),
        "minute": d.getMinutes(),
        "second": d.getSeconds()
        }
    }
    if (t) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(t))
    } else {
        res.writeHead(404)
        res.end()
    }
}).listen(process.argv[2])

