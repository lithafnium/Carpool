//Click Submit button
document.getElementById('signinSubmit').addEventListener('click', function() {
	signinEmail = document.getElementById('signinEmail').value
	signinPassword = document.getElementById('signinPassword').value

  	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	  console.log("Failed login + REASON: " + errorMessage)
	});
	
  	window.location.href = "../dashboard.html";

})