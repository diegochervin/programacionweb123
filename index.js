const express = require("express");

//objetos para llamar los metodos express

const app = express();

// app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("registro")
});

app.post("validar", function(req,res){
    const datos = req.body;
});

//configurar puerto del servidor local
app.listen(3000, function(){
    console.log("servidor creado http://localhost:3000")
});

//middleware
