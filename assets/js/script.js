// save user inputs to local storage and render to screen as list items
var storedIngredients = JSON.parse(localStorage.getItem("ingredients")) || [];
var ingredientForm = $("#ingredient-form");
var ingredientList = $("#ingredient-list");
var clearIngredients = $("#clear-ingredients-button");

function saveIngredients(event) {
  event.preventDefault();
  var ingredientInput = $("#ingredient-input").val();
  storedIngredients.push(ingredientInput);
  localStorage.setItem("ingredients", JSON.stringify(storedIngredients));
  $("#ingredient-input").val("");
  renderIngredients();
}

ingredientForm.on("submit", saveIngredients);

function renderIngredients() {
  ingredientList.text("");
  for (var i = 0; i < storedIngredients.length; i++) {
    ingredientList.append("<li>" + storedIngredients[i] + "</li>");
  }
}

renderIngredients();

clearIngredients.on("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  storedIngredients = JSON.parse(localStorage.getItem("ingredients")) || [];
  renderIngredients();
});
