const express = require("express");
const authRoutes = require("./routes/authRoutes")

const app = express()
const port = 5173

app.use(express.urlencoded({extended: true}))


app.use("/", authRoutes)

app.listen(port, () => (console.log("server is running on " + port)))
