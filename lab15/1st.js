const db = require("mongoose")

db.connect("mongodb://localhost:27017/lab15").then(()=>{
    console.log("DB connected");
}).catch(()=>{
    console.log("DB error");
})

const stdSchema = new db.Schema({
    name: String,
    age: Number,
    course: String
})

const student = db.model("lab_Student",stdSchema)
module.exports = student
