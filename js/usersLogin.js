//Click Submit button
firebase.auth().signOut();

document.getElementById('signinSubmit').addEventListener('click', function() {
	console.log("clicked"); 
	signinEmail = document.getElementById('inputEmail').value;
	signinPassword = document.getElementById('inputPassword').value;

	var wrongEmail = document.getElementById('incorrectEmail'); 
	user = firebase.auth().currentUser; 
	console.log(user);
 	firebase.auth().signInWithEmailAndPassword(signinEmail,signinPassword).then(function(){
   		console.log("redirect")
  		 wrongEmail.style.display = "none";
  		window.location.href = "dashboard.html"; 
	}).catch(function(error) {
  		var errorCode = error.code;
 		var errorMessage = error.message;
  
  		console.log("Failed login + REASON: " + errorMessage + " CODE: " + errorCode)
  		console.log("NULL"); 
  		wrongEmail.style.display = "block"
});




});





