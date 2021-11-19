var StoreBody = document.getElementById("store-table");
var fetchButton = document.getElementById("fetch-button");

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl =
    " https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=stores";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement("tr");
        var tableData = document.createElement("td");
        var link = document.createElement("a");

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

fetchButton.addEventListener("click", getApi);
// // Yelp My App:
// // Client ID-
// // RNKwyr4CeG3-YPZd6zuoCw

// // API Key-
// // 0-efivATHRBOBLIr3ttBqAdaMmB1xCtD_i_EVU5y2X63HaXfMRMLIqAHno8YtkcsbACRmj_XY1LXWI-bKkMYwm8r3JL3Pa2yqW-5-c3yt333jAugC474Z5GTzDmXYXYx
// var restaurant;

// var requestURL =
//   "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972";

// var ApiKey =
//   "0-efivATHRBOBLIr3ttBqAdaMmB1xCtD_i_EVU5y2X63HaXfMRMLIqAHno8YtkcsbACRmj_XY1LXWI-bKkMYwm8r3JL3Pa2yqW-5-c3yt333jAugC474Z5GTzDmXYXYx";
// var zipCode;

// function setup() {
//   var button = select("#zip-input-button");
//   button.clicked(zipinput);

//   input = select("#zip-input");
// }

// function zipinput() {
//   var url = api + input.value() + zipCode + ApiKey;
//   loadJSON(url, gotData);
// }

// console.log(zipinput);

//funciton is responsible for capturing user input and displaying the li nested in the ul elelment
// var foodFormEl = $("food-input");
// var foodListEL = $("#food-list");

// //store the value of the input in a varaible
// function handleFormSubmit(event) {
//   event.preventDefault();

//   var userInput = $("#food-input").val();
//   console.log(userInput);

//     foodListEL.append("<li>" + userInput + "</li>");

// }

// foodFormEl.on("submit", handleFormSubmit);

// save user inputs to local storage and render to screen as list items
// var storedFood = JSON.parse(localStorage.getItem("food")) || [];
// var foodForm = $("#food-form");
// var foodList = $("#food-list");

// function saveFoods(event) {
//   event.preventDefault();
//   var foodInput = $("#food-input").val();
//   storedFood.push(foodInput);
//   localStorage.setItem("food", JSON.stringify(storedFood));
//   $("#food-input").val("");
//   renderfood();
// }

// foodForm.on("submit", saveFoods);
// console.log(saveFoods);
