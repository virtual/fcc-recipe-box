var mongoose = require("mongoose");
var RecipeSchema = new mongoose.Schema({
  picture: String,
  title: String,
  directions: String, 
  ingredients: [{
    name: String,
    amount: String
  }]
});
module.exports = mongoose.model('Recipe', RecipeSchema); 