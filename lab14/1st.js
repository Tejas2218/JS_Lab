const express = require("express")

const app = express()

const server = app.get("/",(req,res)=>{
    res.send(`<h1>Hello Express</h1>`)
})

server.listen(3000,()=>{
    console.log("app is running on port: 3000");
})