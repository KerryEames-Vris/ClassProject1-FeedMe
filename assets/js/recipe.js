var storedIngredients = JSON.parse(localStorage.getItem("ingredients")) || [];

function ingredientsUrl() {
  var myNewIngredients = storedIngredients;
  if (myNewIngredients !== null) {
    console.log(myNewIngredients);
  }
  var ingredientString = myNewIngredients[0];
  for (var i = 1; i < myNewIngredients.length; i++) {
    ingredientString += ",+";
    ingredientString += myNewIngredients[i];
  }
  if (ingredientString.includes("/ /")) {
    ingredientString = ingredientString.replace(/ /g, "");
  }
  return ingredientString;
}

var newIngredientUrl = ingredientsUrl();

async function getRecipeName() {
  var urlCore =
    "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
    newIngredientUrl +
    "&number=4&ranking=1&apiKey=dddc7a96d8424e599a741a91929eb96a";
  fetch(urlCore, {
    method: "GET",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(async function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var recipeResults = document.getElementById("recipeResult");
        var recipe = document.createElement("div");
        var recipeCard = document.createElement("div");
        var recipeImg = document.createElement("img");
        var recipeDetails = document.createElement("div");
        var recipeTitle = document.createElement("h5");
        var recipeText = document.createElement("p");
        var recipeLink = document.createElement("a");
        var recipeId = data[i].id;

        recipe.classList.add("col-auto", "mb-3");
        recipeCard.classList.add("card", "h-100", "special-card", "my-5");
        recipeCard.style.width = "18rem";
        recipeImg.classList.add("card-img-top");
        recipeImg.src = data[i].image;
        recipeDetails.classList.add("card-body");
        recipeTitle.classList.add("card-title");
        recipeTitle.textContent = data[i].title;
        recipeText.classList.add("card-text");
        recipeDetails.setAttribute("id", recipeId);

        recipeLink.classList.add("btn", "btn-primary", "special-button");
        recipeLink.text = "Full Recipe Link";

        recipeResults.append(recipe);
        recipe.append(recipeCard);
        recipeCard.append(recipeImg);
        recipeCard.append(recipeDetails);
        recipeDetails.append(recipeTitle);
        recipeDetails.append(recipeText);
        document.getElementById(recipeId).append(recipeLink);
        await getRecipeUrl(recipeId).then(function (theUrl) {
          recipeLink.href = theUrl;
          console.log({ theUrl });
        });
      }
    });
}

async function getRecipeUrl(dataId) {
  var recipeUrlResult;
  var urlRecipe =
    "https://api.spoonacular.com/recipes/" +
    dataId +
    "/information?apiKey=dddc7a96d8424e599a741a91929eb96a";

  return await fetch(urlRecipe, {
    method: "GET",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response2) {
      return response2.json();
    })
    .then(function (data2) {
      console.log(data2);
      console.log(data2.spoonacularSourceUrl);
      recipeUrlResult = data2.spoonacularSourceUrl;
      return data2.spoonacularSourceUrl;
    });
}

function generateRecipes() {
  getRecipeName();
}

window.onload = generateRecipes();
