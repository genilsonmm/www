const express = require('express')
const router = express.Router()

const alunoController = require('../controller/alunoController')
//const professorController = require('../controller/professorController')

alunoController(router)
//professorController(router)

module.exports = router