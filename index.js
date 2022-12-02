const express = require("express")

const cors = require("cors")

const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.json([
        {
            id: "001",
            name: "John",
            role: "DevOps Engineer",
        },
    ])
})

app.listen(3000, () => {
    console.log("listning from port 3000")
})

