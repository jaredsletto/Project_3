// Function to count campsite types and prepare data for the chart
    function countCampsiteTypes(campsites) {
        const campsiteCounts = {};
        for (const item of campsites) {
            const campsiteType = item.Campsite;
            campsiteCounts[campsiteType] = (campsiteCounts[campsiteType] || 0) + 1;
        }
        return campsiteCounts;
    }

console.log(campsites);

campsiteTypes = campsites.map(function (campsites){
    return campsites.Campsite
  });


// Trace for the campsite Data
    let trace1 = {
        x: campsites.map(campsiteTypes),
        y: campsites.map(campsiteCounts),
        type: "bar"
    };

// Data trace array
    let traceData = [trace1];

// Apply the group barmode to the layout
    let layout = {
    title: "Number of Each Type of Campsite"
    };

// Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", traceData, layout);
