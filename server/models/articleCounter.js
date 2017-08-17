const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ArticleCounterSchema = new Schema({
  _id: String,
  articleID: String,
  articleTitle: String,
  usersRead: [],
  usersVotedSensational: [],
  usersVotedFactual: []
});

module.exports = mongoose.model('ArticleCounter', ArticleCounterSchema);
