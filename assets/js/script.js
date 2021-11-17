// save user inputs to local storage and render to screen as list items
var storedIngredients = JSON.parse(localStorage.getItem("ingredients")) || [];
var ingredientForm = $("#ingredient-form");
var ingredientList = $("#ingredient-list");
var clearIngredients = $("#clear-ingredients-button");
var deleteItemButton = $(".delete-item-btn");

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
    var ingredientListItem = $("<li class='col-3 p-2 bg-light text-dark'>");
    ingredientListItem.text(storedIngredients[i]);
    ingredientListItem.append(
      '<button class="col-3 btn btn-danger btn-small delete-item-btn">x</button>'
    );
    ingredientList.append(ingredientListItem);
  }
}

renderIngredients();

clearIngredients.on("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  storedIngredients = JSON.parse(localStorage.getItem("ingredients")) || [];
  renderIngredients();
});

function deleteItem(event) {
  event.preventDefault();
  var btnClicked = $(event.target);
  if (btnClicked.matches("button")) {
  }
}

deleteItemButton.on("click", deleteItem);
