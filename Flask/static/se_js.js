// let CampsiteType = ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'];

// Metric variable for function inputs
// let metric = "CampsiteAccessible";

// Create a function to calculate the annual average of a metric
function SEmetricMean(se_camps, CampsiteType, metric) {
  // Initialize variables to increment
  let SEcount = 0;
  let SEtotal = 0;

  // Loop through the array of films
  for (let i = 0; i < se_camps.length; i++) {

    // Store the film at index `i` for evaluation
    SErow = se_camps[i];

    // Compare `rating` value to `rating` provided as argument
    if (SErow.CampsiteType == CampsiteType){

      // Increment by `metric` argument value
      SEtotal += SErow[metric];
      // Increment by one
      SEcount += 1;
    }
  }

  // Calculate the average value
  let SEmeanValue = SEtotal / SEcount;

  // Return the calcuated average
  return SEmeanValue;
}

// Invoke the metric average function
// Calculate the average for each rating individually
let SEmetricRV = SEmetricMean(se_camps, 'RV', metric);
let SEmetricS = SEmetricMean(se_camps, 'Shelter', metric);
let SEmetricT = SEmetricMean(se_camps, 'Tent', metric);
let SEmetricC = SEmetricMean(se_camps, 'Cabin', metric);
let SEmetricW = SEmetricMean(se_camps, 'Water', metric);
let SEmetricV = SEmetricMean(se_camps, 'View', metric);
let SEmetricH = SEmetricMean(se_camps, 'Hike', metric);
let SEmetricP = SEmetricMean(se_camps, 'Picnic', metric);
let SEmetricB = SEmetricMean(se_camps, 'Horseback', metric);

// Creat an array of rating averages
let SEmetricArray = [SEmetricRV, SEmetricS, SEmetricT, SEmetricC, SEmetricW, SEmetricV, SEmetricH, SEmetricP, SEmetricB];

// Create a function to plot the rating average metric results
function plotMetric(SEmetricArray, CampsiteType, metric){

  let traceSE = {
    x: CampsiteType,
    y: SEmetricArray,
    type: "line"
  }

  let SEdata = [traceSE]

  // Pass metric to chart title
  let SElayout = {
    title: `South East Campsite Types`
  };

  Plotly.newPlot("seplot", SEdata, SElayout);
}

// Invoke the plot creating function
plotMetric(SEmetricArray, CampsiteType, metric);
