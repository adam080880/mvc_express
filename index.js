const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
    extended: false
}))

// import router
const TestingRoute = require("./router/TestingRoute")

app.use('/testing', TestingRoute)

app.listen(3000, function(err) {
    if(err) throw err
    console.log("server berjalan di port 3000")
})