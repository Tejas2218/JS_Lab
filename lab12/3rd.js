const fs = require("fs")

fs.unlink("2.txt",(err)=>{
    if(err){

        console.log(err);
    }else{
        console.log("deleted..");
    }
})
