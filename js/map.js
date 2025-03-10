
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*Location Data*/
var locations = [
      ['#Boston is where great minds develop ;)', 42.349626, -71.099536],
      ['#HongKong is home', 22.282357, 114.157807],
      ['#London History, architecture, beauty', 51.507911, -0.087749],
      ['#Hanoi Basked in the glory of street foods and beauty of Halong Bay ', 21.032089, 105.847452],
      ['#Bangkok Tropics and spa indulgences', 13.744752, 100.535061],
      ['#Seoul Fried chicken, beer and shopping sprees', 37.554551, 126.970670],
      ['#Tokyo Business trip by day and exploration by night at Roppongi and Shibuya', 35.662743, 139.731206],
      ['#Cancun The classic college spring break', 21.201767, -86.805240],
      ['#KualaLumpur Infinity pool of city views and the hipster Melaka', 3.158024, 101.711578],
      ['#Bali Offsite meeting by the scenic coast', -8.795669, 115.230785],
      ['#Toronto jpang was born here!', 43.739708, -79.413454],
      ['#SiemReap Temple run at the infamous Angkor Wat', 13.412480, 103.867007],
      ['#Kolkata Two-week hotel internship at ITC Sonar Hotel', 22.544288, 88.398072],
      ['#Reykjavik Hearty lamb soup, geysirs and outdoor geothermal spa in the snow', 64.133663, -21.865861],
      ['#SanFrancisco Pursuing innovation at the Valley', 37.422042, -122.084058],
      ['#Singapore Hawker centers and tropical heat', 1.287815, 103.866587],
      ['#LasVegas The untold tales', 36.117905, -115.172966],
      ['#Arizona Drove through beautiful landscapes and Antelope Canyon', 36.862179, -111.374352],
      ['#Florida Where dreams come true and fun rides go', 28.385242, -81.563842],
      ['#LosAngeles The place to seek fame and glory', 34.052182, -118.251371],
      ['#WashingtonDC Museums and White House', 38.903605, -77.038073],
      ['#Taipei All-time favourite', 25.041866, 121.546514],
      ['#Shanghai In its newfound Oriental city vibes', 31.216502, 121.475263],
      ['#Okinawa Sun, beach and friendly locals', 26.352177, 127.808602],
      ['#Hawaii My favourite place in the world', 19.568144, -155.618030],
      ['#Cairo Young and fascinated by the mummies and desert', 30.047003, 31.235461],
      ['#IguazuFalls Bordering Brazil and Argentina', -25.690500, -54.440911],
      ['#MachuPicchu Up in the mountains of Inca ruins and my first altitude sickness'],
      ['#Melbourne Artsy laneways, coffee culture and hipster vibes', -37.818125, 144.969064],
      ['#Sydney The perfect balance between metropolitan and hipster', -33.867922, 151.211487],
      ['#Auckland First gateway into New Zealand', -36.848457, 174.762180],
      ['#Glasgow Cultural, dynamic and metropolitan ', 55.861239, -4.253990],
      ['#Edinburgh Old Town hertiage, scottish whiskey and tales of Independence', 55.950474, -3.186297],
      ['#Copenhagen Bikes, minimalism & all sorts of design wonders', 55.684065, 12.592988],
      ['#Amsterdam Bites of happiness, red lights and that canal life ', 52.359106, 4.884022],
      ['#Malmo Cardamon pastries, Fika (Swedish for tea time) and beautiful timber architecture', 55.604601, 13.002918],
      ['#Prague A myriad of architectural gems and Bohemian beauty, followed by sunset walks on Charles Bridge', 50.086477, 14.411447],
      ['#Cesky Krumlov Lunch by theWelcomed by the the most friendly faces', 48.812905, 14.313909],
      ['#Salzburg Home to the Sound of Music and Mozart', 47.800205, 13.044633],
      ['#Hallstatt Ferry rides, beautiful alpine views and has one of the oldest salt mines in the world', 47.563631, 13.636405],
      ['#Vienna Coffee houses and fell for the classical tourist trap', 48.185216, 16.376528],
      ['#Bratislava Nostalgic Old Town exploration and bronze statue hunting', 48.145116, 17.106877],
      ['#Budapest Massive heat wave led by thermal baths, meat fares and ruin bars', 47.483752, 19.051643],
      ['#Athens Imperfect yet so beautiful, Historical and so rawly preserved', 37.971541, 23.725771],
      ['#Santorini Romantic sunsets and cave houses', 36.461557, 25.375281],
      ['#Mykonos Volcanic beaches in red and black, beautiful alleys for boutique store shopping', 37.444530, 25.325594],
      ['#Berlin Underground arts and raw creativity', 52.517377, 13.406855]

  ];


var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  zoom: 3,
  center: {lat:26.630547, lng:128.145678},
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  scrollwheel: false,

  styles: 
[
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
]
  
  });

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) { 
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}



// This function creates each marker and it sets their Info Window content
function createMarker(latlng, name, address1, address2, postalCode){
   var marker = new google.maps.Marker({
      map: map,
      title: name,
      position: latlng
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +
         address2 + '<br />' +
         postalCode + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}


}