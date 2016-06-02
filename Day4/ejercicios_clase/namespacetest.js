var myApp = (function(){
	var cats = 15;
	var rabbits = 12;
	var dogs = 21;

	var my_public_object = {};

	my_public_object.adoptDog = function() {
		this.dog--;
		console.log ("A dog has found a home!");
	}

	return my_public_object;
}());

myApp.adoptDog();