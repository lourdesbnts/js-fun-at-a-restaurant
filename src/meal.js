function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(foodName, mealPrice, meal) {
  var menuOption = {
    name: foodName,
    price: mealPrice,
    type: meal,
  }
  return menuOption;
}

// var ingredients = [];

function addIngredients(topping1, ingredients) {
  for(var i=0; i < ingredients.length; i++) {
  if (topping1 === ingredients[i]) {
    return
  }
  //return ingredients
}
//
    return ingredients.push(topping1)
  }
function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return (price * .9)
}

function createRecipe(title, ingredients, menuItemType) {
 var newRecipe = {
   title: title,
   ingredients: ingredients,
   type: menuItemType,
 }
 return newRecipe
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
