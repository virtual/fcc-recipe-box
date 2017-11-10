let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let uriUtil = require('mongodb-uri');
let Recipe = require('./models/Recipe.js');
require('dotenv').config();

let mongodbUri = "mongodb://"+process.env.SERVER_MLAB_USER+":"+process.env.SERVER_MLAB_PASSWORD+"@ds151955.mlab.com:51955/fcc-recipe";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000} },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000} }
};

mongoose.connect(mongooseUri, options);
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('database connected to Recipe database');
});

/* passport has strategies which are functions that prove that a user trying to hit your server has permission */
if (process.env.NODE_ENV === 'production') { 
  app.use(express.static("./client/build"));
} else {
  app.use(express.static("public"));  
}
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
  

app.get("/", function(req, res, next) {
  res.send("connected!");
});
 
app.post('/recipes', function(req, res, next) {
  if (!(req.body.query)) { // show all
    Recipe.find(function(err, recipes) {
      if(err){
        next(err)
      } else {
        res.json(recipes);
      }   
    });
  } else { // search by title 
    Recipe.find({title: {"$regex": req.body.query, "$options": "i"}}, 
    function(err, recipes) {
      if(err){
        next(err)
      } else {
        res.json(recipes);
      }   
  });
}
});

// saves recipe on update
app.post('/saveRecipe', function(req, res, next) { 

    // Add new recipe to db for slug/recipe 
    let recipe = new Recipe();   
    recipe.picture = req.body.picture;  
    recipe.title = req.body.title;
    recipe.directions = req.body.directions; 
    recipe.ingredients = req.body.ingredients;

    recipe.save(
      function(err, newrecipe){
        if(err) {
          next(err);
        } else {
          res.json(newrecipe);
        }
      }
    )
});

app.post('/deleteRecipe', function(req, res, next) { 
  Recipe.findByIdAndRemove(req.body.id, (err, toDelete) => {  
    if (err) { console.log(err) }
    let response = {
      message: "recipe successfully deleted" 
    }; 
    res.status(200).send(response);
  });
});
   

var port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log('Recipe app is listening on ' + port);
});