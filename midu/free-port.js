const http = require(`node:http`)
const { findAvailablePort } = require(`./free-port.js`)


   const server = http.createServer((req, res) => {
       console.log(`request received`)
        res.end(`hola mundo`)
   })
       
        findAvailablePort().then(port => {
            server.listen(port, () => {
            console.log(`server listening on port http://localhost:${server.address().port}`)    
            })
})
    
 


