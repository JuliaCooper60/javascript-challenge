// from data.js
const tableData = data;
// get table references
var tbody = d3.select("tbody");
function buildTable(tableData) {
  // First, clear out any existing data
  tbody.html("");
// Step 1: Loop Through `data` and console.log each UFO sighting object
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);

// Step 2:  Use d3 to append one table row `tr` for each UFO Sighting object
    
var row = tbody.append("tr");

// Step 3: Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Create a function that updates the filters. 

function updateFilters() {

  // 4a. Create a variable that saves the element that was changed using d3.select().
var element = d3.select(this);
  // 4b. Save the value that was changed as a variable.
var value = element.property("value");
  // 4c. Save the id of the filter that was changed as a variable.
var id = element.attr("id");

  // 5. If a filter value was entered then add that filterId and value
if (element){filters[id] = value}
  // to the filters list. Otherwise, clear that filter from the filters object.
else {delete filters[id]}
  // 6. Call function to apply all filters and rebuild the table
  filterTable();
}

// 7. Create a function that filters the table when data is entered.
function filterTable() {

  // 8. Set the filtered data to the tableData.
 var filterTable = tableData;
  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach (([key, value]) =>{
    filterTable = filterTable.filter (row => row [key]=== value);
   });
  // 10. Finally, rebuild the table using the filtered data
buildTable(filterTable);
};

// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change",updateFilters);

// Build the table when the page loads
buildTable(tableData);

//   // Creat filter button to clear previous filters 
var button = d3.select("#clear-filter-btn");
button.on("click", function() {
// select data to be filered      
tbody.html("");

// To clear filtger we need to Re-loop Through `data` and console.log each UFO sighting object
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);

// re-append one table row `tr` for each UFO Sighting object
    
var row = tbody.append("tr");

//recreatges the full list 
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

   // Step 1: Loop Through `data` and console.log each UFO sighting object
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);

// Step 2:  Use d3 to append one table row `tr` for each UFO Sighting object
    
var row = tbody.append("tr");

// Step 3: Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
});