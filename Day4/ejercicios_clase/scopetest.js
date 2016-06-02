//Scopes_test_1

/*var x = 5;
function one() {
	var x = 1;
	console.log(x);
}
one();*/

//Scopes_test_2

/*var x = 5;
function oneAndAHalf() {
	var x;
	x = 1;
	console.log(x);
}
oneAndAHalf();*/

//Scopes_test_3

/*var x = 5;
function two(x) {
	console.log(x);
}
two();*/

//Scopes_test_4

/*var x = 5;
function three() {
	console.log(x);
}
three();*/

//Scopes_test_5

/*var x = 5;

function three() {
	console.log(x);
}

function four() {
	x = 4;
	console.log(x);
}

four();
three();*/

//Scopes_test_6

/*function five() {
	var y = 5;
	console.log(y);
}

five();
console.log(y);*/

//Closure_test_1

/*function testClosure() {
	var x = 4;
	function closeX() {
		return x;
	}
	return closeX;
}

var checkLocalX = testClosure();

console.log (checkLocalX());*/

//Closure_test_2

/*function ticketBuilder(transport) {
	var passengerNumber = 0;
	return function(name) {
		passengerNumber ++;
		console.log("Welcome, " + name + ". Here is your ticket for the " + transport + ". You are passenget #" + passengerNumber + ".");
	}
}

var getPlaneTicket = ticketBuilder("plane");
var getTrainTicket = ticketBuilder("train");

getPlaneTicket("John Smith");
getPlaneTicket("Patty Bishop");*/

//Looping_with_closures_test_1

//MI SOLUCION

/*function checkInPassenger(name, customersArray) {
	var passengerChecked;
	for (var i = 0; i < customersArray.length; i++) {
		if(customersArray[i] == name) {
			passengerChecked = function() {
				console.log ("Hi, " + name + ". You're passenger #" + (i+1));
			};
			return passengerChecked;
		}
	}
}

var flightToBali = ["Wayan", "Putu", "Gede", "Ni Luh", "Nyoman"];
var counterCheckIn = checkInPassenger("Gede", flightToBali);
counterCheckIn();*/

//SOLUCION RETORNANDO LA FUNCION

/*function checkInPassenger(name, customersArray) {
	for (var i = 0; i < customersArray.length; i++) {
		if(customersArray[i] == name) {
			return function() {
				console.log ("Hi, " + name + ". You're passenger #" + (i+1));
			};
		}
	}
}

var flightToBali = ["Wayan", "Putu", "Gede", "Ni Luh", "Nyoman"];
var counterCheckIn = checkInPassenger("Gede", flightToBali);
counterCheckIn();*/

//SOLUCION ALTERNATIVA

/*function checkInPassenger(name, customersArray) {
	function createPrinting(passenger_id) {
		return function() {
			console.log ("Hi, " + name + ". You're passenger #" + passenger_id);
		}
	}
	var result;
	for (var i = 0; i < customersArray.length; i++)
	{
		if (customersArray[i] == name) {
			result = createPrinting(i+1);
		}
	}
	return result;
}

var flightToBali = ["Wayan", "Putu", "Gede", "Ni Luh", "Nyoman"];
var counterCheckIn = checkInPassenger("Gede", flightToBali);
counterCheckIn();*/
