// from data.js
var tableData = data;
// Select tbody and make variable.
var tbody = d3.select("tbody");

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
data.forEach(function (UFOreport) {
  console.log(UFOreport);
  var row = tbody.append("tr");

  Object.entries(UFOreport).forEach(function ([key, value]) {
    console.log(key, value);
    // decl variable cell that appends another row to the html table
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the button
var button = d3.select("#filter-btn");
// what happens when the button is clicked
button.on("click", function() {
    // get the input element
    var inputElement = d3.select("#datetime");
    console.log(inputElement);
    // Get the value property of the input element
    var inputElementValue = inputElement.property("value");
    console.log(inputElementValue);
    // filter data 
    var inputFilter = data.filter((obj) =>{
        return obj.datetime == inputElementValue;
    });
    console.log(inputFilter);
});