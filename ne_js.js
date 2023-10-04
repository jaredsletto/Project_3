// let CampsiteType = ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'];

// Metric variable for function inputs
// let metric = "CampsiteAccessible";

// Create a function to calculate the annual average of a metric
function NEmetricMean(ne_camps, CampsiteType, metric) {
  // Initialize variables to increment
  let NEcount = 0;
  let NEtotal = 0;

  // Loop through the array of films
  for (let i = 0; i < ne_camps.length; i++) {

    // Store the film at index `i` for evaluation
    NErow = ne_camps[i];

    // Compare `rating` value to `rating` provided as argument
    if (NErow.CampsiteType == CampsiteType){

      // Increment by `metric` argument value
      NEtotal += NErow[metric];
      // Increment by one
      NEcount += 1;
    }
  }

  // Calculate the average value
  let NEmeanValue = NEtotal / NEcount;

  // Return the calcuated average
  return NEmeanValue;
}

// Invoke the metric average function
// Calculate the average for each rating individually
let NEmetricRV = NEmetricMean(ne_camps, 'RV', metric);
let NEmetricS = NEmetricMean(ne_camps, 'Shelter', metric);
let NEmetricT = NEmetricMean(ne_camps, 'Tent', metric);
let NEmetricC = NEmetricMean(ne_camps, 'Cabin', metric);
let NEmetricW = NEmetricMean(ne_camps, 'Water', metric);
let NEmetricV = NEmetricMean(ne_camps, 'View', metric);
let NEmetricH = NEmetricMean(ne_camps, 'Hike', metric);
let NEmetricP = NEmetricMean(ne_camps, 'Picnic', metric);
let NEmetricB = NEmetricMean(ne_camps, 'Horseback', metric);

// Creat an array of rating averages
let NEmetricArray = [NEmetricRV, NEmetricS, NEmetricT, NEmetricC, NEmetricW, NEmetricV, NEmetricH, NEmetricP, NEmetricB];

// Create a function to plot the rating average metric results
function plotMetric(NEmetricArray, CampsiteType, metric){

  let traceNE = {
    x: CampsiteType,
    y: NEmetricArray,
    type: "bar"
  }

  let NEdata = [traceNE]

  // Pass metric to chart title
  let NElayout = {
    title: `North East Campsite Types`
  };

  Plotly.newPlot("neplot", NEdata, NElayout);
}

// Invoke the plot creating function
plotMetric(NEmetricArray, CampsiteType, metric);
