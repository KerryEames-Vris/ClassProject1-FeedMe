const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
const baseURLByID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const displayCocktailDiv = document.querySelector("#cocktailResults");
const spiritForm = document.getElementById("textInput");
const submitButton = document.getElementById("submitButton");
const displayCocktailDivIngredients = document.querySelector(".ingredients");
const body = document.querySelector("body");

state = {
  drinks: [],
};

let randomNumber;

function getCocktails(spirit) {
  displayCocktailDiv.innerHTML =
    '<h4 class="loadingMessage">Fetching a cocktail based on your spirit of choice...</h4>';
  fetch(`${baseURL}${spirit}`)
    .then((response) => response.json())
    .then((data) => {
      state.drinks = data.drinks;
      if (data.drinks.length > 0) {
        randomNumber = Math.floor(Math.random() * state.drinks.length - 1);
        randomDrink = state.drinks[randomNumber];
        displayCocktailDiv.innerHTML = `
      <div data-id=${randomDrink.idDrink}>
        <p id="cocktailID">${randomDrink.idDrink}</p>
        <p id="cocktailName">${randomDrink.strDrink}</p>
        <img src=${randomDrink.strDrinkThumb} alt=${randomDrink.strDrink} id="cocktailImage"/>
      </div>
      `;
        getCocktailById(`${randomDrink.idDrink}`);
      } else {
        displayCocktailDiv.innerHTML =
          "<p>Sorry, couldn't find anything. Try another spirit.</p>";
      }
    });
}

function getCocktailById(cocktailID) {
  displayCocktailDiv.innerHTML =
    '<p class"loadingMessage">Finding instructions</p>';
  fetch(`${baseURLByID}${cocktailID}`)
    .then((response) => response.json())
    .then((drinksArray) => {
      selectedDrink = drinksArray.drinks[0];
      selectedDrinkName = selectedDrink.strDrink;
      selectedDrinkImage = selectedDrink.strDrinkThumb;
      selectedDrinkInstructions = selectedDrink.strInstructions;

      displayCocktailDivIngredients.innerHTML = `
      <h1 class= "card-title" id="cocktailName">${selectedDrinkName}</h1>
        <img src=${selectedDrinkImage} alt=${selectedDrinkName} style="height: 317.75px; width: 429px my -1px text-align-center" class="card=img-top" id="cocktailImage"/>
            <h3>Ingredients</h3>
            <span class="card-text" id="measurement1">${selectedDrink.strMeasure1}</span>
            <span class="card-text" id="ingredient1">${selectedDrink.strIngredient1}</span>`;
      if (selectedDrink.strIngredient2 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement2">${selectedDrink.strMeasure2}</span>
              <span class="card-text" id="ingredient2">${selectedDrink.strIngredient2}</span>
              `;
      }
      if (selectedDrink.strIngredient3 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement3">${selectedDrink.strMeasure3}</span>
              <span class="card-text" id="ingredient3">${selectedDrink.strIngredient3}</span>
              `;
      }
      if (selectedDrink.strIngredient4 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement4">${selectedDrink.strMeasure4}</span>
              <span class="card-text" id="ingredient4">${selectedDrink.strIngredient4}</span>
              `;
      }
      if (selectedDrink.strIngredient5 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement5">${selectedDrink.strMeasure5}</span>
              <span class="card-text" id="ingredient5">${selectedDrink.strIngredient5}</span>
              `;
      }
      if (selectedDrink.strIngredient6 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement6">${selectedDrink.strMeasure6}</span>
              <span class="card-text" id="ingredient6">${selectedDrink.strIngredient6}</span>
              `;
      }
      if (selectedDrink.strIngredient7 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement7">${selectedDrink.strMeasure7}</span>
              <span class="card-text" id="ingredient7">${selectedDrink.strIngredient7}</span>
              `;
      }
      if (selectedDrink.strIngredient8 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement8">${selectedDrink.strMeasure8}</span>
              <span class="card-text" id="ingredient8">${selectedDrink.strIngredient8}</span>
              `;
      }
      if (selectedDrink.strIngredient9 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement9">${selectedDrink.strMeasure9}</span>
              <span class="card-text" id="ingredient9">${selectedDrink.strIngredient9}</span>
              `;
      }
      if (selectedDrink.strIngredient10 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement10">${selectedDrink.strMeasure10}</span>
              <span class="card-text" id="ingredient10">${selectedDrink.strIngredient10}</span>
              `;
      }
      if (selectedDrink.strIngredient11 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement11">${selectedDrink.strMeasure11}</span>
              <span class="card-text" id="ingredient11">${selectedDrink.strIngredient11}</span>
              `;
      }
      if (selectedDrink.strIngredient12 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement12">${selectedDrink.strMeasure12}</span>
              <span class="card-text" id="ingredient12">${selectedDrink.strIngredient12}</span>
              `;
      }
      if (selectedDrink.strIngredient13 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement13">${selectedDrink.strMeasure13}</span>
              <span class="card-text" id="ingredient13">${selectedDrink.strIngredient13}</span>
              `;
      }
      if (selectedDrink.strIngredient14 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement14">${selectedDrink.strMeasure14}</span>
              <span class="card-text" id="ingredient14">${selectedDrink.strIngredient14}</span>
              `;
      }
      if (selectedDrink.strIngredient15 !== null) {
        displayCocktailDivIngredients.innerHTML += `
              <span class="card-text" id="measurement15">${selectedDrink.strMeasure15}</span>
              <span class="card-text" id="ingredient15">${selectedDrink.strIngredient15}</span>
              `;
      }
      displayCocktailDiv.innerHTML += `<h4>Instructions</h4><p id="cocktailInstructions">${selectedDrinkInstructions}</p>`;
    });
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let selectedSpirit = textInput.value;
  getCocktails(selectedSpirit);
});

body.addEventListener("scroll", (event) => {
  body.style.height = "200vh";
});
