const express = require("express")

const app = express()

let arr = []
app.use(express.json())

app.post("/student",(req,res)=>{
    try{
        
        const student = req.body
        // console.log(student);
        
        arr.push(student);
        res.status(200).send(arr)
    }catch(err){
        console.log(err);
    }
})

app.put("/student/:id",(req,res)=>{
    const id = req.params.id
    const {name,branch} = req.body
    console.log(id);
    let update = arr.find((stu)=>{
        return stu.id==id
    })
    update.name=name
    update.branch=branch
    res.status(200).send(arr)

    console.log(update);
    
})

// app.delete("/student/delete:id",(req,res)=>{
//     try{
//         const id = req.params.id
//         let del = arr.splice(id-1,1)
//         console.log(del);
        
//         res.status(200).send(arr)
//     }catch(err){
//         console.log(err);
//     }
// })

app.listen("3000",()=>{
    console.log("server is running on port: 3000");
})