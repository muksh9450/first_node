const fs = require('fs')
fs.mkdir('json',(err)=>{console.log('folder created')})

fs.writeFile('./json/index.js','sdfs',(err,data)=>{
    console.log(data)
})
// console.log('main index file')