const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt')

readStream.on('data', (chunk)=>{
console.log('.... New Chunk .....')
console.log(chunk)
})

readStream.on('error', (error) => {
    console.error('An error occurred:', error.message);
});