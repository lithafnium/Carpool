var placeSearch, autocomplete;
var database = firebase.database(); 
function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
    autocomplete = new google.maps.places.Autocomplete(
/** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
     {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
}


var address;
function initMap() {

    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.674, lng: -73.945},
      disableDefaultUI: true,
      zoom: 12,
      styles: [
{
    "featureType": "all",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "off"
        },
        {
            "color": "#5a4141"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
        {
            "hue": "#6600ff"
        },
        {
            "saturation": -11
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -78
        },
        {
            "hue": "#6600ff"
        },
        {
            "lightness": -47
        },
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "all",
    "stylers": [
        {
            "hue": "#5e00ff"
        },
        {
            "saturation": -79
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "all",
    "stylers": [
        {
            "lightness": 30
        },
        {
            "weight": 1.3
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
        {
            "hue": "#5e00ff"
        },
        {
            "saturation": -16
        }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -72
        }
    ]
},
{
    "featureType": "water",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -65
        },
        {
            "hue": "#1900ff"
        },
        {
            "lightness": 8
        }
    ]
}
]
    });


    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map.setCenter(pos);

        var marker = new google.maps.Marker({
          position: pos,
          map: map
        });
      }, function() {
      });
    } else {
      // Browser doesn't support Geolocation
    }

    initAutocomplete()

}

var location, arrival, useruid;

// document.getElementById('requestSubmit').addEventListener('click', function() {

    
//     // ;

// });

function sendRequest() {
    console.log("1")
    // firebase.auth().onAuthStateChanged(function(user){
    // //     console.log("2")
    //      if(user){
    // //         console.log("a;sdlkfj"); 
    // //         location = address
    // //         arrival = document.getElementById("timepicker").value
    //              useruid = user.uid

    // //         console.log(useruid, location, arrival)
    // //         writeUserData(useruid, location, arrival)

    //      }
    //      else{
    // //         console.log("4");
    //      }

    //  });
    useruid = "NpEMZWnBNihVNjiKTjggADEcoX03"
    //var user = firebase.auth().currentUser;
    not_location = "272 Virginia Farme Ln Carlisle MA 01741"
    console.log("1 " + not_location)
    arrival = document.getElementById("timepicker").value
    console.log(arrival)
    console.log(useruid)
    console.log(useruid, not_location, arrival)
    writeUserLocData(useruid, not_location, arrival)
    console.log("a;sdlkfj"); 
    ;
    
}

function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();
        console.log(place)
        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        var route, town, street, state, zip
        for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0];
          if (addressType == 'street_number') {
            var street = place.address_components[i]['long_name'];
          }
          else if (addressType == 'route') {
            var route = place.address_components[i]['long_name'];
          }
          else if (addressType == 'locality') {
            var town = place.address_components[i]['long_name'];

          }
          else if (addressType == 'administrative_area_level_1') {
            var state = place.address_components[i]['long_name'];

          }
          else if (addressType == 'postal_code') {
            var zip = place.address_components[i]['long_name'];

          }
          
        }
        address = street + " " + route + ", " + town + ", " + state + ", " + zip
        console.log(address)
        return address
      }


function writeUserLocData(userId, coords, arrival) {
    while(false) {
        console.log("b")
    }
  firebase.database().ref('requests/' + userId).set({

    destination: coords,
    arrival: arrival
    
  });
}


