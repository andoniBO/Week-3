var Car = function(model, noise) {
	this.model = model;
	this.noise = noise;
	this.wheels = 4;

	this.makeNoise = function(){
		console.log (this.noise);
	}
}

coche = new Car("punto","UUUUAauuaaauuauuauauuau!!!");

coche.makeNoise();