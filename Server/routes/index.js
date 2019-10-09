const express = require('express')
const articleRouter = require('./articleRoutes')
const router = express.Router()

router.use('/articles', articleRouter)

module.exports = router