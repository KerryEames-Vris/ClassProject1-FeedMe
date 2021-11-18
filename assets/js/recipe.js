// save user inputs to local storage and render to screen as list items
var storedIngredients = JSON.parse(localStorage.getItem("ingredients")) || [];
var ingredientForm = $("#ingredient-form");
var ingredientList = $("#ingredient-list");
var clearIngredients = $("#clear-ingredients-button");
var searchResult = $("search-Result");
// var apiID = ;
// var apiKey =;

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

ingredientForm.addEventListener("submit", (e) => {
  e.preventDefault();
  (searchQuery = e.target.querySelector("input")), value;
  fetchAPI();
});

//search result section
// async function fetchAPI() {
//     var baseURL = ''
//     var response = await fetch(baseURL)
//     var data = await response.json();
//     generateHTML(data.hits)
//     console.log(data);
// }
// function generateHTML(results){
//    let generatedHTML = '';
//     results.map(result => {
//         generatedHTML +=
//              <div class="search-Result"
//     <div class="container-fluid mt-4">
//       <div class="row justify-content-center">
//         <div class="col-auto mb-3">
//           <div class="card h-100" style="width: 18rem">
//             <a href="">
//               <img class="card-img-top" src="${result.recipe.image}" />
//             </a>
//             <div class="card-body">
//               <h5 class="card-title">${result.recipe.label}</h5>
//               <p class="card-text">
//                 Recipe Info: Lorem ipsum dolor sit amet, consectetur adipisicing
//                 elit. A, dicta unde, cumque aspernatur debitis fuga sit delectus
//                 quos adipisci praesentium neque!
//               </p>
//               <a href="${result.recipe.url}" target="_blank" class="btn btn-primary">Full Recipe Link</a>
//             </div>
//           </div>
//         </div>
//     })
//     searchResult.innerhtml = generatedHTML;

// }
