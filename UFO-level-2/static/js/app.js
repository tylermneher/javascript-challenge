// UFO-level2
// Tyler M. Neher, 2020
// from data.js
var tableData = data;
// Select tbody and make variable.
var tbody = d3.select("tbody");

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
data.forEach(function (UFOreport) {
  // console.log(UFOreport);
  var row = tbody.append("tr");

  Object.entries(UFOreport).forEach(function ([key, value]) {
    // console.log(key, value);
    // decl variable cell that appends another row to the html table
    var cell = row.append("td");
    cell.text(value);
  });
});
// Select the button
var button = d3.select("#filter-btn");
// what happens when the button is clicked
button.on("click", function () {
  // get the input element
  var inputElement_datetime = d3.select("#datetime");
  var inputElement_city = d3.select("#city");
  var inputElement_state = d3.select("#state");
  var inputElement_country = d3.select("#country");
  var inputElement_shape = d3.select("#shape");
  console.log(inputElement_datetime);
  console.log(inputElement_city);
  console.log(inputElement_state);
  console.log(inputElement_country);
  console.log(inputElement_shape);

  // Get the value property of the input element
  var inputElementValue_datetime = inputElement_datetime.property("value");
  var inputElementValue_city= inputElement_city.property("value");
  var inputElementValue_state = inputElement_state.property("value");
  var inputElementValue_country = inputElement_country.property("value");
  var inputElementValue_shape = inputElement_shape.property("value");

  console.log(inputElementValue_datetime);
  console.log(inputElementValue_city);
  console.log(inputElementValue_state);
  console.log(inputElementValue_country);
  console.log(inputElementValue_shape);

  // filter data
  var inputFilter = data.filter((obj) => {
    return obj.datetime == inputElementValue_datetime;
  });
  console.log(inputFilter);
});
