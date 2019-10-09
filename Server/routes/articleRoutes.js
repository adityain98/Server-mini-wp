const express = require('express')
const ArticleRouter = require('../controllers/articleController')
const router = express.Router()

router.get('/', ArticleRouter.getAll)

router.get('/:id', ArticleRouter.getOne)

router.post('/', ArticleRouter.createOne)

router.delete('/:id', ArticleRouter.deleteOne)

router.patch('/:id', ArticleRouter.updateOne)

module.exports = router