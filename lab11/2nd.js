/* ._|^_^|_. */
const http = require("http")

const server = http.createServer((req,res) => {
    res.write("http response generated done")
    res.end()
})

const port = 1618

server.listen(port,() => {
    console.log(`server is running on port: ${port}`)
});