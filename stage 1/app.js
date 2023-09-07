const express = require("express")
const port = process.env.PORT || 7070
const dataRoute = require("./route/dataRoute")
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/api", dataRoute)
app.listen(7070, () => {
    console.log(`Server is running on http://localhost:${port}`)
})