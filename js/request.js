var placeSearch, autocomplete;

function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
    autocomplete = new google.maps.places.Autocomplete(
/** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
     {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
}

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
      }, function() {
      });
    } else {
      // Browser doesn't support Geolocation
    }

    initAutocomplete()

}

