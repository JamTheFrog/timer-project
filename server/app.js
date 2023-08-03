const express = require("express");
const authRoutes = require("./routes/authRoutes")
const connectToDB = require("./db/dbConfig")

const app = express()
const port = 3002

app.use(express.urlencoded({extended: true}))


app.use("/", authRoutes)

connectToDB()
app.listen(port, () => (console.log("server is running on " + port)))
