const fs = require(`node:fs/promises`)
console.log("leemos el primer archivo")
fs.readFile(`./archivo.txt`, `utf-8`)
.then(text => { 
    console.log(`primer texto:`, text)
})


console.log("hacemos cosas de mientras")

console.log(`leemos segundo archivo2`)

fs.readFile(`./archivo2.txt`, `utf-8`)
.then(secondtext => { 
    console.log(`segundo texto:`, secondtext)
})

