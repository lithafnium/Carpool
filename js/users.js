

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
	  // ...
	});

})