firebase.auth().signOut()

var name, email, uid;
var database = firebase.database();
//Click Submit button
document.getElementById('submitButton').addEventListener('click', function() {
  	name = document.getElementById('inputName').value
	email = document.getElementById('inputEmail').value
	password = document.getElementById('inputPassword').value
  	console.log(name, email, password)

  	//make new user
  	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log("Failed Signup + REASON: " + errorMessage)

	  // ...
	});

  	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			var user = firebase.auth().currentUser;
	  		console.log(user); 


		
		 
		  uid = user.uid;  
		  writeUserData(uid, name, email);
		  	window.location.href = "request.html";

		}
		else{

		}
	});
	 // window.location.href = "receive.html";

  	
});


function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    displayName: name,
    email: email
    
  }, false);
}




