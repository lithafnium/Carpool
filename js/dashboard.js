firebase.auth().signOut();
firebase.auth().onAuthStateChanged(function(user) {


	if (user) {
		var userId = user.uid;
		firebase.database().ref('users/' + userId).once('value').then(function(snapshot){
			console.log(snapshot.val()["displayName"]);
			document.getElementById("currentUser").innerHTML = snapshot.val()["displayName"]
		});

	} else {
		console.log("null user"); 
		document.getElementById("currentUser").innerHTML = "User"
	}
});

