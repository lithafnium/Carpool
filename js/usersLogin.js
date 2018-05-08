//Click Submit button
firebase.auth().signOut()

document.getElementById('signinSubmit').addEventListener('click', function() {

	signinEmail = document.getElementById('inputEmail').value
	signinPassword = document.getElementById('inputPassword').value

	firebase.auth().signInWithEmailAndPassword(signinEmail, signinPassword).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	  console.log("Failed login + REASON: " + errorMessage + " CODE: " + errorCode)
	});
	// console.log("asdf")


	//var user = firebase.auth().currentUser;
	

	firebase.auth().onAuthStateChanged(function(user) {
	var wrongEmail = document.getElementById('incorrectEmail'); 

		console.log(user)

		if(user){
			console.log("change screen")
			wrongEmail.style.display = "none"

	 		window.location.href = "request.html";

	 		}
	 		else{
	 			wrongEmail.style.display = "block"
	 		}
 	});

	


});


