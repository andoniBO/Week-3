//Solucion inicial

/*function Sleep () {
	console.log ("It's been 10 seconds.");
};


setTimeout (Sleep, 10000);

*/


//Solucion Manu

function sleep (time, callback) {
	setTimeout(callback, time*1000);
}

sleep(10, function(){
	console.log("It's been 10 seconds");;
})