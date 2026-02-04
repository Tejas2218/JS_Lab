const http = require("http")
const fs = require("fs")
const path = require("path")

const port = 1618

const server = http.createServer((req,res) => {
    
    const filepath = path.join(__dirname, "node.html")

    fs.readFile(filepath,(err, data) => {
        if(err){
            res.writeHead(404,{'Content-Type': 'text/plain'})
            res.end("404")
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
    })
})

server.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})