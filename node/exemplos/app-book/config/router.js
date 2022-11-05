const express = require('express')
const router = express.Router()

const bookController = require('../controller/bookController')
bookController(router)

module.exports = router