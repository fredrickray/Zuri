const express = require("express")
const port = process.env.PORT || 2000
const devRoute = require("./routes/devRoutes")
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/api", devRoute)

app.use("/", (req, res) => {
    res.send("You have reached HNG Server")
})
app.listen(2000, () => {
    console.log(`Server is running on http://localhost:${port}`)
})