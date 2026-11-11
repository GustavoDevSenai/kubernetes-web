const express = require("express")

const app = express()


app.get("/",(req,res)=>{
    res.send("Minha aplicacao Kubernetes Funcionando")
})


app.get("/cpu", (req, res)=>{

    let total = 0

    for(let i = 0; i < 500000000; i++){
        total += i
    }

    res.json({
        mensagem: "CPU utilizada",
        total
    })

})


app.listen(3331,()=>{
    console.log("Servidor rodando na porta 3331")
})