const express = require("express")
const app = express()
const port = 3000

app.get("/hello", (req, res) => {
    return res.send("Lee Kiet hello nha okk kkk")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
