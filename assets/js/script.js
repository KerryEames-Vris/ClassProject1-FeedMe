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
    var ingredientListItem = $(
      "<li class='row justify-content-between p-2 bg-light text-dark'>"
    );
    ingredientListItem.text(storedIngredients[i]);
    ingredientListItem.attr("data-index", i);
    var deleteItemButton = $(
      '<button class="col-2 btn btn-danger btn-small delete-item-btn">x</button>'
    );
    ingredientListItem.append(deleteItemButton);
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
  var btnClicked = event.target;
  if (btnClicked.matches(".delete-item-btn")) {
    var parentItem = btnClicked.parentElement;
    var index = parentItem.getAttribute("data-index");
    storedIngredients.splice(index, 1);
    localStorage.setItem("ingredients", JSON.stringify(storedIngredients));
    renderIngredients();
  }
}

ingredientList.on("click", deleteItem);
