// Create a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Create an Array
  let campsites = [{
    Location: [37.550124511, -119.683913958],
    FacilityID: "232446",
    Campsite: "RV",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [31.586164, -97.264983],
    FacilityID: "232709",
    Campsite: "RV",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [36.13011, -115.38476],
    FacilityID: "250877",
    Campsite: "Shelter",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [38.2352166640001, -78.717593177],
    FacilityID: "252470",
    Campsite: "Tent",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [36.040823, -93.345717],
    FacilityID: "10001451",
    Campsite: "Tent",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [38.616093, -89.3544],
    FacilityID: "233478",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [32.917917, -85.181022],	
    FacilityID: "10003508",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [46.993093, -111.990061],
    FacilityID: "261696",
    Campsite: "RV",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [43.312133, -109.858197],
    FacilityID: "264411",
    Campsite: "Cabin",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [37.741599437, -119.60264025],
    FacilityID: "10004152",
    Campsite: "Tent",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [47.267952, -116.081203],
    FacilityID: "273785",
    Campsite: "RV",
    Use: "Overnight",
    Accessible: "TRUE"
},
{	
    Location: [43.9039, -123.56927],
    FacilityID: "273308",
    Campsite: "Shelter",
    Use: "Day",	Accessible: "FALSE"
},
{	
    Location: [32.992751, -85.174451],
    FacilityID: "10004589",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [32.917472, -85.191762],
    FacilityID: "10004592",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [33.028136, -85.177324],
    FacilityID: "10004594",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [32.959214, -85.150565],
    FacilityID: "10004596",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{
    Location: [33.058737, -85.119329],
    FacilityID: "10004598",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [32.991655, -85.205619],
    FacilityID: "10004600",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [32.997826, -85.229038],
    FacilityID: "10004602",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [33.075072, -85.102748],
    FacilityID: "10004604",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [41.958112, -70.074826],
    FacilityID: "10004657",
    Campsite: "Cabin",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [41.847716, -69.948381],
    FacilityID: "10004659",
    Campsite: "Cabin",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [41.922798, -69.978996],
    FacilityID: "10004661",
    Campsite: "Cabin",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [41.926892, -69.977201],
    FacilityID: "10004663",
    Campsite: "Cabin",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [41.958068, -69.993971],
    FacilityID: "10004665",
    Campsite: "Cabin",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [41.925892, -69.977154],
    FacilityID: "10004667",
    Campsite: "Cabin",
    Use: "Overnight",
    Accessible: "FALSE"
},
{
    Location: [37.610919246, -112.831477637],
    FacilityID: "233392",
    Campsite: "RV",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [38.477314480004, -120.007484246871],
    FacilityID: "10005253",
    Campsite: "Tent",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [38.502001, -95.70761],
    FacilityID: "233462",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [38.117106, -83.536787],
    FacilityID: "10005354",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "TRUE"

},
{	
    Location: [39.7566, -79.3937],
    FacilityID: "10005358",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [46.739591, -111.888228],
    FacilityID: "261822",
    Campsite: "RV",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [60.34805, -154.04274],
    FacilityID: "10006208",
    Campsite: "Cabin",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	Location: [48.178913, -116.892201],
    FacilityID: "233596",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	Location: [48.159246, -116.775395],
    FacilityID: "233600",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [48.236785, -116.586491],	
    FacilityID: "233637",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [38.5635965270001, -77.3592668319999],	
    FacilityID: "10007130",	
    Campsite: "Cabin",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [48.60219791, -93.10706452],	
    FacilityID: "249981",	
    Campsite: "Water",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [47.8420733512787, -116.196980915198],	
    FacilityID: "10007160",	
    Campsite: "Cabin",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [37.27164444, -83.37033056],	
    FacilityID: "233809",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [46.8630166667, -112.464766667],	
    FacilityID: "253491",	
    Campsite: "View",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [36.30303, -85.911351],	
    FacilityID: "232572",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	Location: [38.6017089060001, -77.41519909],	
    FacilityID: "233379",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [46.4711194444001, -86.6461638889],
    FacilityID: "251969",	
    Campsite: "Hike",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [38.976584722, -77.21752001],	
    FacilityID: "251544",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"	
},
{	
    Location: [41.09444384167, -105.222866246088],	
    FacilityID: "10009517",	
    Campsite: "Picnic",	
    Use: "Day",	
    Accessible: "TRUE"		
},
{	
    Location: [34.695727, -92.146548],	
    FacilityID: "232746",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "TRUE"		
},
{	
    Location: [38.145151, -109.621006],	
    FacilityID: "257007",	
    Campsite: "Shelter",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [35.3811441578286, -82.7414021014386],	
    FacilityID: "10011396",	
    Campsite: "Horseback",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [39.623940035, -78.385331197],	
    FacilityID: "252968",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [45.5130174284114, -88.5283033628046],	
    FacilityID: "251942",	
    Campsite: "Hike",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [44.3805780060001, -68.058301614],	
    FacilityID: "251833",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [46.4771194444, -86.6519027777999],	
    FacilityID: "251976",	
    Campsite: "Hike",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [46.4957638889001, -86.6822999999999],	
    FacilityID: "251974",	
    Campsite: "Hike",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [39.5402138888999, -120.187855556],	
    FacilityID: "252037",	
    Campsite: "View",	
    Use: "Overnight",	
    Accessible: "FALSE"		},
{	
    Location: [43.8468610442133, -121.866167720728],	
    FacilityID: "236938",	
    Campsite: "Water",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [47.7573254544162, -91.7846334965118],	
    FacilityID: "233841",	
    Campsite: "Cabin",	
    Use: "Overnight",	
    Accessible: "TRUE"		
},
{	
    Location: [43.84448239644, -121.848567788734],	
    FacilityID: "237056",	
    Campsite: "Water",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [37.75055, -121.009551],	
    FacilityID: "10029004",
    Campsite: "Hike",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [37.784997, -120.805419],	
    FacilityID: "10029012",	
    Campsite: "Hike",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [43.8380112839932, -121.890479330305],	
    FacilityID: "236991",	
    Campsite: "Water",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [38.170228, -109.634189],	
    FacilityID: "252281",	
    Campsite: "Shelter",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [35.8000811420001, -75.5445741949999],	
    FacilityID: "251431",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [39.40816, -88.77364],	
    FacilityID: "10036862",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [39.41104, -88.781],	
    FacilityID: "10036864",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [39.41571, -88.77647],	
    FacilityID: "10036866",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [39.55117, -88.62684],	
    FacilityID: "10036879",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [39.45432, -88.73621],	
    FacilityID: "10036881",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
        
{	
    Location: [38.990427336, -114.221805033],	
    FacilityID: "251958",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [39.40658, -88.78068],	
    FacilityID: "10036906",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
    
{	
    Location: [39.53339, -88.6117],
    FacilityID: "10036909",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [41.270553, -80.460491],	
    FacilityID: "251956",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [48.5559797046963, -116.939492302982],	
    FacilityID: "10038994",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "TRUE"		
},
{	
    Location: [48.5482570000001, -116.87533],	
    FacilityID: "233263",	
    Campsite: "Water",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [48.5655390000001, -116.904167],	
    FacilityID: "233264",	
    Campsite: "Water",	
    Use: "Overnight",
    Accessible: "FALSE"		
},
{	
    Location: [39.4287982600001, -121.110083037],	
    FacilityID: "10039887",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [39.4325334270001, -121.124268903],	
    FacilityID: "10039993",	
    Campsite: "Water",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [39.4696527130001, -121.165553354],	
    FacilityID: "10040022",
    Campsite: "Water",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [35.8154908020001, -82.145890755],	
    FacilityID: "258667",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [36.149894, -96.247271],	
    FacilityID: "10040524",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [43.048035, -72.947757],	
    FacilityID: "10040547",	
    Campsite: "Hike",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [47.0863936, -112.603544],	
    FacilityID: "10040565",	
    Campsite: "Cabin",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{
    Location: [46.7924494816551, -112.584123229526],	
    FacilityID: "10040589",	
    Campsite: "Cabin",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    
    Location: [38.91403, -107.03256],	
    FacilityID: "10040591",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "TRUE"		
},
{	
    Location: [35.952875, -96.29116],	
    FacilityID: "10041495",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},

{	
    Location: [42.0449250720001, -70.072840216],	
    FacilityID: "10045243",	
    Campsite: "Cabin",	
    Use: "Overnight",	
    Accessible: "TRUE"		
},
{	
    Location: [42.0448718480001, -70.072767256],	
    FacilityID: "10045245",	
    Campsite: "Cabin",	
    Use: "Overnight",	
    Accessible: "TRUE"		
},
{	
    Location: [42.0448168290001, -70.072689512],	
    FacilityID: "10045247",	
    Campsite: "Cabin",	
    Use: "Overnight",	
    Accessible: "TRUE"		
},
{	
    Location: [34.421509, -89.730706],	
    FacilityID: "10046288",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [35.5747788330389, -118.529896794025],	
    FacilityID: "10046933",	
    Campsite: "Hike",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [43.98579979, -123.6622102],	
    FacilityID: "273309",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [36.0355584000001, -114.802880617],	
    FacilityID: "10048964",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [42.427326, -72.023392],	
    FacilityID: "10048970",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
    
{
    Location: [37.2019466580001, -86.237345885],	
    FacilityID: "258992",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},  
{	
    Location: [37.2164842490001, -86.0502809229999],	
    FacilityID: "10048983",	
    Campsite: "Hike",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},   
{	Location: [37.81139873, -120.7136273],	
    FacilityID: "10048998",	
    Campsite: "Hike",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},  
{	Location: [38.891197, -95.375342],	
    FacilityID: "250850",	
    Campsite: "Horseback",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},  
{	Location: [34.40604943, -89.79910765],	
    FacilityID: "10049272",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},  
{	
    Location: [34.1376886410354, -108.481474267702],	
    FacilityID: "10049273",	
    Campsite: "Shelter",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},  
{	Location: [32.702247, -93.508715],	
    FacilityID: "10052157",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},  
{	Location: [32.368113, -93.448152],	
    FacilityID: "10052192",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},  
{	Location: [34.1371911645692, -108.488862226749],	
    FacilityID: "10052227",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [33.837773, -95.582282],	
    FacilityID: "10053793",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [35.438939, -94.169729],	
    FacilityID: "10049434",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [34.126431, -89.790571],	
    FacilityID: "10060225",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},  
{	
    Location: [38.211014, -93.509938],	
    FacilityID: "233425",	
    Campsite: "Shelter",	
    Use: "Day",
    Accessible: "TRUE"		
},
{	
    Location: [41.480125, -79.441259],	
    FacilityID: "251946",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [35.4943385500001, -114.687358367],	
    FacilityID: "10068512",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "TRUE"		
},
{	
    Location: [59.8797541320001, -139.774634194],	
    FacilityID: "10075403",	
    Campsite: "Cabin",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [36.806766, -80.039766],	
    FacilityID: "10075441",	
    Campsite: "Water",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [44.281152, -110.627642],	
    FacilityID: "259309",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [38.9429327100001, -120.7639305],	
    FacilityID: "10077451",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [35.8303553269061, -105.664160170918],	
    FacilityID: "10077501",	
    Campsite: "Shelter",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [39.420629702, -77.748339652],	
    FacilityID: "252970",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [44.245278565, -68.309272376],	
    FacilityID: "234674",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [57.70794, -153.9021],	
    FacilityID: "234629",	
    Campsite: "Cabin",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [46.5534305556001, -86.6968055556],	
    FacilityID: "251973",	
    Campsite: "Hike",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [37.631152, -86.437601],	
    FacilityID: "233409",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "TRUE"		
},
{	
    Location: [37.377819, -113.643944],	
    FacilityID: "10085599",	
    Campsite: "Shelter",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [36.949961, -113.793284],	
    FacilityID: "10086109",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [35.502803, -92.075914],	
    FacilityID: "232597",	
    Campsite: "Shelter",	
    Use: "Day",
    Accessible: "FALSE"		
},
{	
    Location: [32.511017, -87.872187],	
    FacilityID: "232569",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [41.7224, -91.525202],	
    FacilityID: "254086",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "TRUE"		
},
{	
    Location: [41.759013, -91.557074],	
    FacilityID: "254085",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "TRUE"		
},
{	
    Location: [46.502222, -116.348055],	
    FacilityID: "10094038",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "TRUE"		
},
{	
    Location: [41.9006403037573, -100.301308570193],	
    FacilityID: "234120",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [34.401371, -89.793535],	
    FacilityID: "10098548",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [34.40065, -89.807701],	
    FacilityID: "10098551",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [34.396535, -89.784481],	
    FacilityID: "10098553",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [34.403628, -89.79848],	
    FacilityID: "10098555",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [34.400151, -89.791778],	
    FacilityID: "10098558",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [34.157566, -89.907069],	
    FacilityID: "10098560",
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [41.721837, -91.529734],	
    FacilityID: "254079",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "TRUE"		
},
{	
    Location: [43.9054585613076, -110.643038072703],	
    FacilityID: "258831",	
    Campsite: "RV",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [34.159676, -89.896646],	
    FacilityID: "10099358",
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [43.75425914, -110.7213268],	
    FacilityID: "247664",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [44.0055802815, -110.687973935],	
    FacilityID: "247785",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [34.159176, -89.898693],
    FacilityID: "10099484",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	   
    Location: [34.150924, -89.908501],	
    FacilityID: "10099489",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [43.9046046114165, -110.635694576848],	
    FacilityID: "10099575",	
    Campsite: "Cabin",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [41.724088, -91.527093],	
    FacilityID: "254081",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "TRUE"		
},
{	
    Location: [32.554883, -87.880678],	
    FacilityID: "10101311",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [32.842577, -87.835339],	
    FacilityID: "10101313",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{ 	
    Location: [32.709734, -87.790599],	
    FacilityID: "10101315",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [32.895272, -87.780664],	
    FacilityID: "10101317",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [33.273526, -87.420521],	
    FacilityID: "10101319",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{
    Location: [32.520408, -87.886899],	
    FacilityID: "10101322",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [48.348504115, -120.714055204],	
    FacilityID: "10101324",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [48.307874111, -120.654415224],	
    FacilityID: "10101333",
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [48.313304111, -120.657925222],	
    FacilityID: "10101344",	
    Campsite: "Tent",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	    
    Location: [33.830438, -89.777559],	
    FacilityID: "10101351",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [33.801626, -89.764097],	
    FacilityID: "10101354",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [33.806516, -89.777485],	
    FacilityID: "10101356",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [33.809619, -89.773472],	
    FacilityID: "10101360",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [47.143821, -121.933261],
    FacilityID: "10101398",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [34.568949, -93.192091],	
    FacilityID: "10103087",
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [34.570359, -93.214607],	
    FacilityID: "10103089",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [48.0796557753607, -114.989084475588],	
    FacilityID: "10103111",
    Campsite: "View",	
    Use: "Overnight",	
    Accessible: "FALSE"		
},
{	
    Location: [36.549782, -78.468231],	
    FacilityID: "10103157",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "TRUE"		
},
{	
    Location: [36.575477, -78.417038],	
    FacilityID: "10103159",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [36.56204, -78.288897],	
    FacilityID: "10103189",	
    Campsite: "Shelter",	
    Use: "Day",	
    Accessible: "FALSE"		
},
{	
    Location: [36.601808, -78.299233],
    FacilityID: "10103191",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [32.936933, -85.200283],
    FacilityID: "10107303",
    Campsite: "Shelter",
    Use: "Day",	Accessible: "FALSE"
},
{	
    Location: [33.002283, -85.172567],
    FacilityID: "10107305",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [33.094033, -85.06355],
    FacilityID: "10107310",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [44.105138, -110.667814],
    FacilityID: "258832",
    Campsite: "Cabin",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [36.537828, -78.596446],
    FacilityID: "10107534",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [34.162615, -89.826405],
    FacilityID: "10119467",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [34.126939, -89.789249],
    FacilityID: "10119469",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [34.137622, -89.906566],
    FacilityID: "10119471",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [34.164776, -89.887317],
    FacilityID: "10119477",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [34.141655, -89.764494],
    FacilityID: "10119479",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [20.7397085150001, -156.218381527],
    FacilityID: "10119505",
    Campsite: "Hike",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [34.427285, -89.709808],
    FacilityID: "10120780",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [33.842874, -89.778373],
    FacilityID: "10120783",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [34.493938, -89.585486],
    FacilityID: "10120785",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [34.419017, -89.735758],
    FacilityID: "10120787",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "TRUE"
},
{	
    Location: [34.580644, -93.265696],
    FacilityID: "10120789",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "TRUE"
},
{	
    Location: [34.542327, -93.346535],
    FacilityID: "10120791",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "TRUE"
},
{	
    Location: [34.570504, -93.191197],
    FacilityID: "10120794",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "TRUE"
},
{	
    Location: [34.56858, -93.4708],
    FacilityID: "10120796",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "TRUE"
},
{	
    Location: [34.7387067, -90.1198619],
    FacilityID: "10122577",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [34.7729698, -90.1130012],	
    FacilityID: "10122580",
    Campsite: "Shelter",
    Use: "Day",
    Accessible: "FALSE"
},
{	
    Location: [41.561053, -78.599103],
    FacilityID: "10122722",
    Campsite: "RV",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [32.4080000000001, -110.707],
    FacilityID: "10122832",
    Campsite: "Cabin",
    Use: "Overnight",
    Accessible: "FALSE"	
},
{	
    Location: [43.4726278210001, -113.566977519],
    FacilityID: "255136",
    Campsite: "Tent",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [36.0399639230001, -111.822537613],
    FacilityID: "258825",
    Campsite: "RV",
    Use: "Overnight",
    Accessible: "FALSE"
},
{	
    Location: [48.297060507, -118.145918974],
    FacilityID: "275085",
    Campsite: "Hike",
    Use: "Overnight",
    Accessible: "FALSE"
},
{
    Location: [36.021, -85.782],
    FacilityID: "10128465",
    Campsite: "Tent",
    Use: "Overnight",
    Accessible: "FALSE"
},
];
 
// Looping through the campsites array, create one marker for each campsite
for (let i = 0; i < campsites.length; i++) {
    let camp = campsites[i];
    L.marker(camp.Location)
      .bindPopup(`<h1>FacilityID: ${camp.FacilityID}</h1> <h2>Campsite: ${camp.Campsite.toLocaleString()}</h2><h3>Use: ${camp.Use}</h3><h4>Accessible?: ${camp.Accessible}</h4>`)
      .addTo(myMap);
  }
