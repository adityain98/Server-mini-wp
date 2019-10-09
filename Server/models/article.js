const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const articleSchema = new Schema({
    title:  String,
    createdAt: String,
    content: String,
    category: String
  });

  var Article = mongoose.model('Article', articleSchema);

  module.exports = Article