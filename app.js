const express = require('express')
const app = express()

//middleware
app.use(express.json())

//route
app.get("/", (req, res) => {
    res.send({ message: "hello" })
})


app.listen(5000, () => {
    console.log("server started on port 5000");
})