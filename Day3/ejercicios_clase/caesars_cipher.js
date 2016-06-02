var words = ["dead", "bygone", "landing", "cheaply", "assumed", "incorrectly", "attention", "agent"];
//decoder(words);
console.log (wordSelector(words,"odd"));
console.log (wordSelector(words,"even"));
console.log (wordSelector(words,"all"));
console.log (decoder(words,"first"));
console.log (decoder(words,"last"));
console.log (decoder(words,"caca"));
caesarsCipher();

/*function decoder(the_words) {
	var secret_message = [];
	var cont = 0;
	for (var i = 0; i < the_words.length; i++) {
		//if(i % 5 == 0)
		//{
		//	cont = 0;
		//}
		//var word_in_array = the_words[i].split("");
		//secret_message.push(word_in_array[cont]);
		//cont++;
		secret_message += the_words[i].charAt(cont);
		cont = (cont + 1) % 5;
	}
	//var real_secret_message = secret_message.join("");
	console.log(secret_message);
}*/
function caesarsCipher() {
	do {
		op = menu();
		switch (op) {
			case 1:
				break;
			case 2:
				superdecoder();
				break;
			case 3:
				break;
			default:
				console.log ("WRONG OPTION BITCH");
		}
	} while (op != 3);
}

function menu() {
	console.log ("    ***CAESARS CIPHER***");
	console.log ("");
	console.log ("1. Cipher a message");
	console.log ("2. Decode a message");
	console.log ("3. Exit");
	console.log ("");
	console.log ("               Select your option");

	var prompt = require ('prompt');
	var op;
	prompt.start ();
	prompt.get(['op'],function(err,result) {
		if (err) { return onErr(err); }
		return (result.op);
	});
}

function superdecoder() {
	console.log ("    ***CAESARS CIPHER***");
	console.log ("");
	console.log ("What message do you want to decode?");
}

function wordSelector(coded_message, condition) {
	if (condition == "all") {
		return (coded_message);
	}
	var odd_selection = [];
	var even_selection = [];
	for (var i = 0; i < coded_message.length; i++) {
		if (i % 2 === 0)
		{
			odd_selection.push(coded_message[i])
		}else{
			even_selection.push(coded_message[i])
		}
	}
	if (condition == "even") {
		return (even_selection);
	} else {
		return (odd_selection);
	}
}

function decoder(the_words, starting_point) {
	var secret_message = [];
	var cont = 0;
	if (starting_point == "first") {
		for (var i = 0; i < the_words.length; i++) {
			secret_message += the_words[i].charAt(cont);
			cont = (cont + 1) % 5;
		}
	} else if (starting_point == "last") {
		for (var i = the_words.length-1; i >= 0; i--) {
			secret_message += the_words[i].charAt(cont);
			cont = (cont + 1) % 5;
		}
	} else {
		return ("ERROR, I DONT KNOW WHERE IS THE STARTING POINT TO DECODE");
	}
	return (secret_message);
}

function sentenceToArray(coded_sentence) {
	coded_array = coded_sentence.split(" ");
	return (coded_array);
}