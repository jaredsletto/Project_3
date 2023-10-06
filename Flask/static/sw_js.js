// let CampsiteType = ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'];

// Metric variable for function inputs
// let metric = "CampsiteAccessible";

// Create a function to calculate the annual average of a metric
function SWmetricMean(sw_camps, CampsiteType, metric) {
  // Initialize variables to increment
  let SWcount = 0;
  let SWtotal = 0;

  // Loop through the array of films
  for (let i = 0; i < sw_camps.length; i++) {

    // Store the film at index `i` for evaluation
    SWrow = sw_camps[i];

    // Compare `rating` value to `rating` provided as argument
    if (SWrow.CampsiteType == CampsiteType){

      // Increment by `metric` argument value
      SWtotal += SWrow[metric];
      // Increment by one
      SWcount += 1;
    }
  }

  // Calculate the average value
  let SWmeanValue = SWtotal / SWcount;

  // Return the calcuated average
  return SWmeanValue;
}

// Invoke the metric average function
// Calculate the average for each rating individually
let SWmetricRV = SWmetricMean(sw_camps, 'RV', metric);
let SWmetricS = SWmetricMean(sw_camps, 'Shelter', metric);
let SWmetricT = SWmetricMean(sw_camps, 'Tent', metric);
let SWmetricC = SWmetricMean(sw_camps, 'Cabin', metric);
let SWmetricW = SWmetricMean(sw_camps, 'Water', metric);
let SWmetricV = SWmetricMean(sw_camps, 'View', metric);
let SWmetricH = SWmetricMean(sw_camps, 'Hike', metric);
let SWmetricP = SWmetricMean(sw_camps, 'Picnic', metric);
let SWmetricB = SWmetricMean(sw_camps, 'Horseback', metric);

// Creat an array of rating averages
let SWmetricArray = [SWmetricRV, SWmetricS, SWmetricT, SWmetricC, SWmetricW, SWmetricV, SWmetricH, SWmetricP, SWmetricB];

// Create a function to plot the rating average metric results
function plotMetric(SWmetricArray, CampsiteType, metric){

  let traceSW = {
    x: CampsiteType,
    y: SWmetricArray,
    type: "line"
  }

  let SWdata = [traceSW]

  // Pass metric to chart title
  let SWlayout = {
    SWtitle: `South West Campsite Types`
  };

  Plotly.newPlot("swplot", SWdata, SWlayout);
}

// Invoke the plot creating function
plotMetric(SWmetricArray, CampsiteType, metric);
