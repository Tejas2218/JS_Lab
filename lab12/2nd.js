const fs = require("fs");
const path = require("path")

// const filePath = path.join(__dirname,"asd.txt")
let data1 =fs.readFileSync("asd.txt","utf-8")
console.log(data1);
const newData = fs.appendFileSync("2.txt",`${data1}\n`);
