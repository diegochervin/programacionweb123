const fs = require(`node:fs`)
console.log("leemos el primer archivo")
const text = fs.readFile(`./archivo.txt`, `utf-8`, (err, text)=> {
    console.log(text)
})



console.log("hacemos cosas de mientras")

console.log(`leemos segundo archivo2`)
const secondtext = fs.readFile(`./archivo2.txt`, `utf-8`,(err, secondtext) => {
    console.log(secondtext)
})




// const text = fs.readFileSync(`./archivo.txt`, `utf-8`)
// console.log(text)