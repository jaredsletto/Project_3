// Create an array of each country's numbers
let nw = Object.values(nw_file.NorthWest);
let ne = Object.values(ne_file.NorthEast);
let sw = Object.values(sw_file.SouthWest);
let se = Object.values(se_file.SouthEast);

// Create an array of category labels
let labels = Object.keys(nw_file.NorthWest);

// Display the default plot
function init() {
  let data = [{
    values: nw,
    labels: labels,
    type: "bar"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("bar", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  let data = [];

  if (dataset == 'NorthWest') {
      data = nw;
  }
  else if (dataset == 'NorthEast') {
      data = ne;
  }
  else if (dataset == 'SouthWest') {
      data = sw;
  }
  else if (dataset == 'SouthEast') {
    data = se;
  }

// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("bar", "values", [newdata]);
}

init();
