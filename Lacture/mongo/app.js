const db = require("mongoose")

db.connect("mongodb://localhost:27017/lecture").then(()=>{
    console.log("mongoDB connected");
}).catch((err)=>{
    console.log("Error:",err);
})

const studentSchema = new db.Schema({
    name: String,
    branch: String,
    age: Number,
});

const student = db.model("student", studentSchema)

const data = {
    name: "Tejas",
    branch: "Computer",
    age: 18
}

async function runInsert() {
    const s1 = await student.create({
        name: data.name,
        branch: data.branch,
        age: data.age
    })
    console.log("data inserted successfully");
    
}

async function runGet() {
    const s1 = await student.find()    
    console.log(s1);
}

async function runUpdate() {
    const s1 = await student.updateOne(
        {branch:"Computer"},
        {$set: {branch: "Computer - CE"}}
    )  

    console.log("Update Successfully");
    
}
async function runDelete()
{
    const s4 = await student.deleteOne(
        {name:"Tejas"}
    )
    console.log("Data deleted")
}



// runInsert()
// runGet()
// runUpdate() 
runDelete()

