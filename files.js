const fs = require('fs')

// reading files
fs.readFile('./docs/blog1.txt', (error,data)=>{
    if(error){
        console.log(error)
    }
    console.log("my data",data.toString())
})
// writing files

// directories

// deleting files