const express = require('express')
const router = express.Router()

const bookController = require('../controller/bookController')
//const userController = require('../controller/userController')

bookController(router)
//userController(router)

module.exports = router