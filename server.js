const express = require("express")
const recipeRouter = require("./routers/recipeRouter")

const port = 3000
const server = express()
server.use(express.json())


server.use(recipeRouter)



server.use((er,req,res,next)=> {
    console.log(er)
    res.status(500).json({message: "server error"})
})
server.listen(port,()=>{
    console.log(`running on http://localhost:${port}`)
})