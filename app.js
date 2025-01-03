import express from "express"
import { logger } from "./middlewares/logger.js"
import { home } from "./controllers/Home.js"

const app = express()
const PORT = 5000


//middlewares

app.use(logger)


//controllers

app.get("/home", home)

app.get("/", (req, res) => {
    res.send("Hello")
    console.log("hello world")
})


app.listen(PORT, ()=>{
    console.log(`Server is running at : ${PORT}`)

})