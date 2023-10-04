barColors = barColors = ["brown", "green","blue","brown","green", "blue","brown","green", "blue"]

let CampsiteType = ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'];

// Metric variable for function inputs
let metric = "CampsiteAccessible";

// Create a function to calculate the annual average of a metric
function metricMean(nw_camps, CampsiteType, metric) {
  // Initialize variables to increment
  let count = 0;
  let total = 0;

  // Loop through the array of films
  for (let i = 0; i < nw_camps.length; i++) {

    // Store the film at index `i` for evaluation
    row = nw_camps[i];

    // Compare `rating` value to `rating` provided as argument
    if (row.CampsiteType == CampsiteType){

      // Increment by `metric` argument value
      total += row[metric];
      // Increment by one
      count += 1;
    }
  }

  // Calculate the average value
  let meanValue = total / count;

  // Return the calcuated average
  return meanValue;
}

// Invoke the metric average function
// Calculate the average for each rating individually
let metricRV = metricMean(nw_camps, 'RV', metric);
let metricS = metricMean(nw_camps, 'Shelter', metric);
let metricT = metricMean(nw_camps, 'Tent', metric);
let metricC = metricMean(nw_camps, 'Cabin', metric);
let metricW = metricMean(nw_camps, 'Water', metric);
let metricV = metricMean(nw_camps, 'View', metric);
let metricH = metricMean(nw_camps, 'Hike', metric);
let metricP = metricMean(nw_camps, 'Picnic', metric);
let metricB = metricMean(nw_camps, 'Horseback', metric);

// Creat an array of rating averages
let metricArray = [metricRV, metricS, metricT, metricC, metricW, metricV, metricH, metricP,metricB];

// Create a function to plot the rating average metric results
function plotMetric(metricArray, CampsiteType, metric){

  let trace1 = {
    x: CampsiteType,
    y: metricArray,
    type: "bar"
  }

  let data = [trace1]

  // Pass metric to chart title
  let layout = {
    title: `North West Campsite Types`
  };

  Plotly.newPlot("nwplot", data, layout);
}

// Invoke the plot creating function
plotMetric(metricArray, CampsiteType, metric);
