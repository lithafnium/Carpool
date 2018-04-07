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

	firebase.auth().onAuthStateChanged(function(user) {
 		if(user !== null){
 			window.location.href = "request.html";

 		}
 		else{
 			var wrongEmail = document.getElementById('incorrectEmail'); 
 			wrongEmail.style.display = "block"
 		}
	});
	

	


});

