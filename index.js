const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    // return self.connection.dropDatabase();
  })
  .then(() => {
    return Recipe.create({})
    Run your code here, after you have insured that the connection was made
    Recipe.create({
      title: 'Grilled Cheese',
      level: 'UltraPro Chef',
      ingredients: [
        'bread',
        'butter',
        'cheese'
      ],
      cuisine: 'American',
      dishType: 'main_course',
      image: 'https://www.tasteofhome.com/recipes/super-grilled-cheese-sandwiches/',
      duration: 5,
      creator: 'Bobby Slay'
    })
      .then(recipe => console.log(recipe.title))
  })

Recipe.insertMany(data0.then((recipes) => {
  console.log(recipes);
});

  .catch (error => {
  console.error('Error connecting to the database', error);
});
