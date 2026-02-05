/* ._|^_^|_. */
const fs = require("fs").promises
const path = require("path")

let text = "this is automatic file by node"

try{
    fs.writeFile("asd.txt",text);
console.log("Done");
    
}
catch(err){
    console.log(err);
    
}