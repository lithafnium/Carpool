
var config = {
   apiKey: "AIzaSyAY52q8ifdcfv4tgIup_-TqQVcGZ5M7EXs",
    authDomain: "carpool-3489f.firebaseapp.com",
    databaseURL: "https://carpool-3489f.firebaseio.com",
    projectId: "carpool-3489f",
    storageBucket: "carpool-3489f.appspot.com",
    messagingSenderId: "450073891207"
};

firebase.initializeApp(config);

// var user = firebase.auth().currentUser;

// // 
// console.log(user);
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

function initialize() {
	initAutocomplete()
}