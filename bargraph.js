// Create an object to store the count of campsites per category
const campsiteCounts = {};

// Loop through the data and count campsites per category
data.forEach(entry => {
  const campsiteCategory = entry.Campsite; // Get the campsite category
  if (campsiteCategory) {
    // If the category exists, increment the count by 1, or initialize to 1
    campsiteCounts[campsiteCategory] = (campsiteCounts[campsiteCategory] || 0) + 1;
  }
});

// Print the campsite counts per category
for (const category in campsiteCounts) {
  if (campsiteCounts.hasOwnProperty(category)) {
    console.log(`${category}: ${campsiteCounts[category]}`);
  }
}

// Campsite names
const names = Object.keys(campsiteCounts); // Use Object.keys to get category names

// Trace for Data
const trace1 = {
  x: names, // Use the 'names' array for x-axis
  y: Object.values(campsiteCounts), // Use Object.values to get category counts
  type: "bar"
};

// Data trace array
const traceData = [trace1];

// Apply the group barmode to the layout
const layout = {
  title: "Campsites"
  
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);
