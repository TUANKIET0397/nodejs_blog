const express = require("express")
const morgan = require("morgan")
const app = express()
const port = 3000

app.use(morgan("combined"))

app.get("/hello", (req, res) => {
    return res.send("Hello everyone, My name is tnKiet ne")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
