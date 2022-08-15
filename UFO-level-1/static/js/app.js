

// // from data.js
var tableData = data;
// console.log(tableData);

// // Get a reference to the table body - table elements variables-
var tbody = d3.select("tbody");

// Console.log the ufoSighting data from data.js

console.log(data);

// Step 1: Loop Through `data` and console.log each UFO sighting object
tableData.forEach(function (ufoSighting) {
    console.log(ufoSighting);

    // Step 2:  Use d3 to append one table row `tr` for each UFO Sighting object

    var row = tbody.append("tr");

    // Step 3: Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function ([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

//   // Select the button
var button = d3.select("#filter-btn");
button.on("click", function () {
    // select data to be filered      
    tbody.html("");

    // Select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, City, State, shape, Duration and Comments
    var inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue)
    //console.log filter values
    console.log(filteredData);

    filteredData.forEach(function (selections) {
        console.log(selections);
        // Append one table row `tr` for each UFO Sighting object
        var row = tbody.append("tr");
        // Use `Object.entries` to console.log each UFO Sighting value
        Object.entries(selections).forEach(function ([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
//   // Creat filter button to clear previous filters 
var button = d3.select("#clear-filter-btn");
button.on("click", function () {
    // select data to be filered      
    tbody.html("");

    // To clear filtger we need to Re-loop Through `data` and console.log each UFO sighting object
    tableData.forEach(function (ufoSighting) {
        console.log(ufoSighting);

        // re-append one table row `tr` for each UFO Sighting object

        var row = tbody.append("tr");

        //recreatges the full list 
        Object.entries(ufoSighting).forEach(function ([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
    // Step 1: Loop Through `data` and console.log each UFO sighting object
    tableData.forEach(function (ufoSighting) {
        console.log(ufoSighting);

        // Step 2:  Use d3 to append one table row `tr` for each UFO Sighting object

        var row = tbody.append("tr");

        // Step 3: Use `Object.entries` to console.log each UFO Sighting value
        Object.entries(ufoSighting).forEach(function ([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
});