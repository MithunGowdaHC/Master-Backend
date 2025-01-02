const express = require("express")

const app = express()

app.listen(5000, (req, res)=>{
    console.log(`Server is running at 5000`)
})

app.get("/", (req, res) => {
    res.send("Hello")
    console.log("hello world")
})