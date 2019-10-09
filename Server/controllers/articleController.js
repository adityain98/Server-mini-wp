const Article = require('../models/article')

class ArticleController{
  static getAll(req, res, next){
    Article.find()
      .then(articles=>{
        res.status(200).json(articles)
      })
      .catch(next)
  }

  static getOne(req, res, next){
    const id = req.params.id
    Article.findOne({_id: id})
    .then(article=>{
      res.status(200).json(article)
    })
    .catch(next)
  }

  static createOne(req, res, next){
    const {title, createdAt, content, category} = req.body

    Article.create({
      title,
      createdAt,
      content,
      category
    })
      .then(article=>{
        res.status(201).json(article)
      })
      .catch(next)
  }

  static deleteOne(req, res, next){
    const id = req.params.id
    Article.deleteOne({_id: id})
      .then(number=>{
        res.status(201).json(number)
      })
      .catch(next)
  }

  static updateOne(req, res, next){
    const id = req.params.id
    const {title, content, createdAt, category} = req.body
    Article.updateOne({_id: id}, {
      title,
      createdAt,
      content,
      category
    })
      .then(number=>{
        res.status(201).json(number)
      })    
      .catch(next)
  }
}

module.exports = ArticleController