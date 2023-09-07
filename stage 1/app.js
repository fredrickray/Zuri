const express = require("express")
const port = process.env.PORT || 7070

const app = express()


app.listen(port, () => {
    console.log(`Server is running on http://localhost/${port}`)
})