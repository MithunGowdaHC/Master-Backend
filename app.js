import express from "express"
import bodyParser from "body-parser"
import { logger } from "./middlewares/logger.js"
import { home } from "./controllers/Home.js"
import { hello } from "./controllers/Hello.js"
import bodyParser from "body-parser"

export const app = express()
const PORT = 5000


//middlewares

app.use(logger)
app.use(bodyParser.json())


//controllers

app.get("/", home)

app.get("/hello", hello)


app.listen(PORT, ()=>{
    console.log(`Server is running at : ${PORT}`)

})