//Click Submit button
document.getElementById('signinSubmit').addEventListener('click', function() {
	signinEmail = document.getElementById('inputEmail').value
	signinPassword = document.getElementById('inputPassword').value

  	firebase.auth().signInWithEmailAndPassword(signinEmail, signinPassword).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	  console.log("Failed login + REASON: " + errorMessage)
	});
	
  	window.location.href = "dashboard.html";

})