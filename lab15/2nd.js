const express = require("express")
const db = require("mongoose")
const student = require("./1st")

const app = express()

app.use(express.json())

db.connect("mongodb://localhost:27017/lab15").then(()=>{
    console.log("DB connected");
}).catch(()=>{
    console.log("DB error");
})

app.get("/", async (req,res)=>{
    const data = await student.find()
    res.send(`<h4>${data}</h4>`)
})

app.post("/student", (req,res)=>{
    const {name, age, course} = req.body
    student.create({
        name: name,
        age: age,
        course: course
    })
    res.send(`<h2>inserted..</h2>`)
    console.log("inserted..");
})

app.listen(3000,()=>{
    console.log("Server: 3000");
})