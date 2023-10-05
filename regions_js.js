// Arrays to hold movies by decade
RV = [];
Shelter = [];
Tent = [];
Cabin = [];
Water = [];
View = [];
Hike = [];
Picnic = [];
Horseback = [];
RVOpen = [];
ShelterOpen = [];
TentOpen = [];
CabinOpen = [];
WaterOpen = [];
ViewOpen = [];
HikeOpen = [];
PicnicOpen = [];
HorsebackOpen = [];

// For loop to go through all movies
for (let i = 0; i < ne_camps.length; i++) {
  // Variable to hold current movie in loop
  let camp = ne_camps[i]

  // Conditional statement to determine array assignment
  if (camp.CampsiteType == 'RV' && camp.CampsiteAccessible == true) {
    RVOpen.push(camp);
  } else if (camp.CampsiteType == 'Shelter' && camp.CampsiteAccessible == true) {
    ShelterOpen.push(camp);
  } else if (camp.CampsiteType == 'Tent' && camp.CampsiteAccessible == true) {
    TentOpen.push(camp);
  } else if (camp.CampsiteType == 'Cabin' && camp.CampsiteAccessible == true) {
    CabinOpen.push(camp);
  } else if (camp.CampsiteType == 'Water' && camp.CampsiteAccessible == true) {
    WaterOpen.push(camp);
  } else if (camp.CampsiteType == 'View' && camp.CampsiteAccessible == true) {
    ViewOpen.push(camp);
  } else if (camp.CampsiteType == 'Hike' && camp.CampsiteAccessible == true) {
    HikeOpen.push(camp);
  } else if (camp.CampsiteType == 'Picnic' && camp.CampsiteAccessible == true) {
    PicnicOpen.push(camp);
  } else if (camp.CampsiteType == 'Horseback' && camp.CampsiteAccessible == true) {
    HorsebackOpen.push(camp);
  }
}

for (let i = 0; i < ne_camps.length; i++) {
    // Variable to hold campsite type in loop
  let camp = ne_camps[i]

  if (camp.CampsiteType == 'RV') {
    RV.push(camp);
  } else if (camp.CampsiteType == 'Shelter') {
    Shelter.push(camp);
  } else if (camp.CampsiteType == 'Tent') {
    Tent.push(camp);
  } else if (camp.CampsiteType == 'Cabin') {
    Cabin.push(camp);
  } else if (camp.CampsiteType == 'Water') {
    Water.push(camp);
  } else if (camp.CampsiteType == 'View') {
    View.push(camp);
  } else if (camp.CampsiteType == 'Hike') {
    Hike.push(camp);
  } else if (camp.CampsiteType == 'Picnic') {
    Picnic.push(camp);
  } else if (camp.CampsiteType == 'Horseback') {
    Horseback.push(camp);
  }
}

// Find the percent open
let RVPer = RVOpen.length / RV.length;
let ShelterPer = ShelterOpen.length / Shelter.length;
let TentPer = TentOpen.length / Tent.length;
let CabinPer = CabinOpen.length / Cabin.length;
let WaterPer = WaterOpen.length / Water.length;
let ViewPer = ViewOpen.length / View.length;
let HikePer = HikeOpen.length / Hike.length;
let PicnicPer = PicnicOpen.length / Picnic.length;
let HorsebackPer = HorsebackOpen.length / Horseback.length;

let netrace = {
  x: ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'],
  y: [RVOpen.length, ShelterOpen.length, TentOpen.length, CabinOpen.length, WaterOpen.length, ViewOpen.length, HikeOpen.length, PicnicOpen.length, HorsebackOpen.length],
  type: 'scatter',
  mode: 'markers',
  text: ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'],
  marker: {
    size: [RVPer, ShelterPer, TentPer, CabinPer, WaterPer, ViewPer, HikePer, PicnicPer, HorsebackPer],
    sizemode: 'diameter',
    sizeref: 0.05,
    color: 'blue',
  },
  name: 'North West'
};

// Arrays to hold movies by decade
RV = [];
Shelter = [];
Tent = [];
Cabin = [];
Water = [];
View = [];
Hike = [];
Picnic = [];
Horseback = [];
RVOpen = [];
ShelterOpen = [];
TentOpen = [];
CabinOpen = [];
WaterOpen = [];
ViewOpen = [];
HikeOpen = [];
PicnicOpen = [];
HorsebackOpen = [];

// For loop to go through all movies
for (let i = 0; i < nw_camps.length; i++) {
  // Variable to hold current movie in loop
  let camp = nw_camps[i]

  // Conditional statement to determine array assignment
  if (camp.CampsiteType == 'RV' && camp.CampsiteAccessible == true) {
    RVOpen.push(camp);
  } else if (camp.CampsiteType == 'Shelter' && camp.CampsiteAccessible == true) {
    ShelterOpen.push(camp);
  } else if (camp.CampsiteType == 'Tent' && camp.CampsiteAccessible == true) {
    TentOpen.push(camp);
  } else if (camp.CampsiteType == 'Cabin' && camp.CampsiteAccessible == true) {
    CabinOpen.push(camp);
  } else if (camp.CampsiteType == 'Water' && camp.CampsiteAccessible == true) {
    WaterOpen.push(camp);
  } else if (camp.CampsiteType == 'View' && camp.CampsiteAccessible == true) {
    ViewOpen.push(camp);
  } else if (camp.CampsiteType == 'Hike' && camp.CampsiteAccessible == true) {
    HikeOpen.push(camp);
  } else if (camp.CampsiteType == 'Picnic' && camp.CampsiteAccessible == true) {
    PicnicOpen.push(camp);
  } else if (camp.CampsiteType == 'Horseback' && camp.CampsiteAccessible == true) {
    HorsebackOpen.push(camp);
  }
}

for (let i = 0; i < nw_camps.length; i++) {
    // Variable to hold campsite type in loop
  let camp = nw_camps[i]

  if (camp.CampsiteType == 'RV') {
    RV.push(camp);
  } else if (camp.CampsiteType == 'Shelter') {
    Shelter.push(camp);
  } else if (camp.CampsiteType == 'Tent') {
    Tent.push(camp);
  } else if (camp.CampsiteType == 'Cabin') {
    Cabin.push(camp);
  } else if (camp.CampsiteType == 'Water') {
    Water.push(camp);
  } else if (camp.CampsiteType == 'View') {
    View.push(camp);
  } else if (camp.CampsiteType == 'Hike') {
    Hike.push(camp);
  } else if (camp.CampsiteType == 'Picnic') {
    Picnic.push(camp);
  } else if (camp.CampsiteType == 'Horseback') {
    Horseback.push(camp);
  }
}

// Find the percent open
let nwRVPer = RVOpen.length / RV.length;
let nwShelterPer = ShelterOpen.length / Shelter.length;
let nwTentPer = TentOpen.length / Tent.length;
let nwCabinPer = CabinOpen.length / Cabin.length;
let nwWaterPer = WaterOpen.length / Water.length;
let nwViewPer = ViewOpen.length / View.length;
let nwHikePer = HikeOpen.length / Hike.length;
let nwPicnicPer = PicnicOpen.length / Picnic.length;
let nwHorsebackPer = HorsebackOpen.length / Horseback.length;

let nwtrace = {
  x: ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'],
  y: [RVOpen.length, ShelterOpen.length, TentOpen.length, CabinOpen.length, WaterOpen.length, ViewOpen.length, HikeOpen.length, PicnicOpen.length, HorsebackOpen.length],
  type: 'scatter',
  mode: 'markers',
  text: ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'],
  marker: {
    size: [RVPer, ShelterPer, TentPer, CabinPer, WaterPer, ViewPer, HikePer, PicnicPer, HorsebackPer],
    sizemode: 'diameter',
    sizeref: 0.05,
    color: 'yellow',
  },
  name: 'North East'
};

// Arrays to hold movies by decade
RV = [];
Shelter = [];
Tent = [];
Cabin = [];
Water = [];
View = [];
Hike = [];
Picnic = [];
Horseback = [];
RVOpen = [];
ShelterOpen = [];
TentOpen = [];
CabinOpen = [];
WaterOpen = [];
ViewOpen = [];
HikeOpen = [];
PicnicOpen = [];
HorsebackOpen = [];

// For loop to go through all movies
for (let i = 0; i < se_camps.length; i++) {
  // Variable to hold current movie in loop
  let camp = se_camps[i]

  // Conditional statement to determine array assignment
  if (camp.CampsiteType == 'RV' && camp.CampsiteAccessible == true) {
    RVOpen.push(camp);
  } else if (camp.CampsiteType == 'Shelter' && camp.CampsiteAccessible == true) {
    ShelterOpen.push(camp);
  } else if (camp.CampsiteType == 'Tent' && camp.CampsiteAccessible == true) {
    TentOpen.push(camp);
  } else if (camp.CampsiteType == 'Cabin' && camp.CampsiteAccessible == true) {
    CabinOpen.push(camp);
  } else if (camp.CampsiteType == 'Water' && camp.CampsiteAccessible == true) {
    WaterOpen.push(camp);
  } else if (camp.CampsiteType == 'View' && camp.CampsiteAccessible == true) {
    ViewOpen.push(camp);
  } else if (camp.CampsiteType == 'Hike' && camp.CampsiteAccessible == true) {
    HikeOpen.push(camp);
  } else if (camp.CampsiteType == 'Picnic' && camp.CampsiteAccessible == true) {
    PicnicOpen.push(camp);
  } else if (camp.CampsiteType == 'Horseback' && camp.CampsiteAccessible == true) {
    HorsebackOpen.push(camp);
  }
}

for (let i = 0; i < ne_camps.length; i++) {
    // Variable to hold campsite type in loop
  let camp = se_camps[i]

  if (camp.CampsiteType == 'RV') {
    RV.push(camp);
  } else if (camp.CampsiteType == 'Shelter') {
    Shelter.push(camp);
  } else if (camp.CampsiteType == 'Tent') {
    Tent.push(camp);
  } else if (camp.CampsiteType == 'Cabin') {
    Cabin.push(camp);
  } else if (camp.CampsiteType == 'Water') {
    Water.push(camp);
  } else if (camp.CampsiteType == 'View') {
    View.push(camp);
  } else if (camp.CampsiteType == 'Hike') {
    Hike.push(camp);
  } else if (camp.CampsiteType == 'Picnic') {
    Picnic.push(camp);
  } else if (camp.CampsiteType == 'Horseback') {
    Horseback.push(camp);
  }
}

// Find the percent open
let seRVPer = RVOpen.length / RV.length;
let seShelterPer = ShelterOpen.length / Shelter.length;
let seTentPer = TentOpen.length / Tent.length;
let seCabinPer = CabinOpen.length / Cabin.length;
let seWaterPer = WaterOpen.length / Water.length;
let seViewPer = ViewOpen.length / View.length;
let seHikePer = HikeOpen.length / Hike.length;
let sePicnicPer = PicnicOpen.length / Picnic.length;
let seHorsebackPer = HorsebackOpen.length / Horseback.length;

let setrace = {
  x: ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'],
  y: [RVOpen.length, ShelterOpen.length, TentOpen.length, CabinOpen.length, WaterOpen.length, ViewOpen.length, HikeOpen.length, PicnicOpen.length, HorsebackOpen.length],
  type: 'scatter',
  mode: 'markers',
  text: ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'],
  marker: {
    size: [seRVPer, seShelterPer, seTentPer, seCabinPer, seWaterPer, seViewPer, seHikePer, sePicnicPer, seHorsebackPer],
    color: 'brown',
    sizemode: 'diameter',
    sizeref: 0.05,
  },
  name: 'South East'
};

// Arrays to hold movies by decade
RV = [];
Shelter = [];
Tent = [];
Cabin = [];
Water = [];
View = [];
Hike = [];
Picnic = [];
Horseback = [];
RVOpen = [];
ShelterOpen = [];
TentOpen = [];
CabinOpen = [];
WaterOpen = [];
ViewOpen = [];
HikeOpen = [];
PicnicOpen = [];
HorsebackOpen = [];

// For loop to go through all movies
for (let i = 0; i < sw_camps.length; i++) {
  // Variable to hold current movie in loop
  let camp = sw_camps[i]

  // Conditional statement to determine array assignment
  if (camp.CampsiteType == 'RV' && camp.CampsiteAccessible == true) {
    RVOpen.push(camp);
  } else if (camp.CampsiteType == 'Shelter' && camp.CampsiteAccessible == true) {
    ShelterOpen.push(camp);
  } else if (camp.CampsiteType == 'Tent' && camp.CampsiteAccessible == true) {
    TentOpen.push(camp);
  } else if (camp.CampsiteType == 'Cabin' && camp.CampsiteAccessible == true) {
    CabinOpen.push(camp);
  } else if (camp.CampsiteType == 'Water' && camp.CampsiteAccessible == true) {
    WaterOpen.push(camp);
  } else if (camp.CampsiteType == 'View' && camp.CampsiteAccessible == true) {
    ViewOpen.push(camp);
  } else if (camp.CampsiteType == 'Hike' && camp.CampsiteAccessible == true) {
    HikeOpen.push(camp);
  } else if (camp.CampsiteType == 'Picnic' && camp.CampsiteAccessible == true) {
    PicnicOpen.push(camp);
  } else if (camp.CampsiteType == 'Horseback' && camp.CampsiteAccessible == true) {
    HorsebackOpen.push(camp);
  }
}

for (let i = 0; i < sw_camps.length; i++) {
    // Variable to hold campsite type in loop
  let camp = sw_camps[i]

  if (camp.CampsiteType == 'RV') {
    RV.push(camp);
  } else if (camp.CampsiteType == 'Shelter') {
    Shelter.push(camp);
  } else if (camp.CampsiteType == 'Tent') {
    Tent.push(camp);
  } else if (camp.CampsiteType == 'Cabin') {
    Cabin.push(camp);
  } else if (camp.CampsiteType == 'Water') {
    Water.push(camp);
  } else if (camp.CampsiteType == 'View') {
    View.push(camp);
  } else if (camp.CampsiteType == 'Hike') {
    Hike.push(camp);
  } else if (camp.CampsiteType == 'Picnic') {
    Picnic.push(camp);
  } else if (camp.CampsiteType == 'Horseback') {
    Horseback.push(camp);
  }
}

// Find the percent open
let swRVPer = RVOpen.length / RV.length;
let swShelterPer = ShelterOpen.length / Shelter.length;
let swTentPer = TentOpen.length / Tent.length;
let swCabinPer = CabinOpen.length / Cabin.length;
let swWaterPer = WaterOpen.length / Water.length;
let swViewPer = ViewOpen.length / View.length;
let swHikePer = HikeOpen.length / Hike.length;
let swPicnicPer = PicnicOpen.length / Picnic.length;
let swHorsebackPer = HorsebackOpen.length / Horseback.length;

let swtrace = {
  x: ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'],
  y: [RVOpen.length, ShelterOpen.length, TentOpen.length, CabinOpen.length, WaterOpen.length, ViewOpen.length, HikeOpen.length, PicnicOpen.length, HorsebackOpen.length],
  type: 'scatter',
  mode: 'markers',
  text: ['RV', 'Shelter', 'Tent', 'Cabin', 'Water', 'View', 'Hike', 'Picnic', 'Horseback'],
  marker: {
    size: [swRVPer, swShelterPer, swTentPer, swCabinPer, swWaterPer, swViewPer, swHikePer, swPicnicPer, swHorsebackPer],
    sizemode: 'diameter',
    sizeref: .05,
    color: 'green',
  },
  name: 'South West'
};


const layout = {
  title: "Campsites Open (%) by Region",
  legend: ['NorthEast', 'NorthWest', 'SouthWest', 'SouthEast']
};

// Plot results
Plotly.newPlot("region_plot", [netrace, nwtrace, swtrace, setrace], layout);

console.log(netrace);
