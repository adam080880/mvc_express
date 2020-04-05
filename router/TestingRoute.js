const express = require("express")
const route = express.Router()

const TestingController = require("../controllers/TestingController")

route.get('/', TestingController.get)
route.post('/', TestingController.post)

module.exports = route




