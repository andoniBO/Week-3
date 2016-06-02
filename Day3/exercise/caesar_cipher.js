//HASTA BONUS 1 (INCLUIDO)

/*
function caesarCipher(message, shift) {
	var shift = shift || -3;
	var split_message = message.split("");
	var code_message = [];
	for (var i = 0; i < split_message.length; i++) {
		if ((split_message[i] >= "A" && split_message[i] <= "Z") || (split_message[i] >= "a" && split_message[i] <= "z"))
		{
			code_message.push(split_message[i].charCodeAt(0))
			if (code_message[i] + shift > 122){
				code_message[i] = code_message[i] + shift - 25;
			} else if (code_message[i] + shift < 97) {
				code_message[i] = code_message[i] + shift + 25;
			} else {
				code_message[i] += shift;
			}
		} else {
			code_message.push(split_message[i].charCodeAt(0))
		}
		split_message[i] = String.fromCharCode(code_message[i]);
	}
	//split_message.map(String.fromCharCode((split_message[i].charCodeAt(0) - 3)));
	return split_message.join("");
}

var encrypted_message = caesarCipher("brutus", -3);
*/

//BONUS 2

function module_cipher() {
	return {
		cipher: function(message) { 
			var shift = 3;
			var split_message = message.split("");
			var code_message = [];
			for (var i = 0; i < split_message.length; i++) {
				if ((split_message[i] >= "A" && split_message[i] <= "Z") || (split_message[i] >= "a" && split_message[i] <= "z"))
				{
					code_message.push(split_message[i].charCodeAt(0))
					if (code_message[i] + shift > 122){
						code_message[i] = code_message[i] + shift - 25;
					} else if (code_message[i] + shift < 97) {
						code_message[i] = code_message[i] + shift + 25;
					} else {
						code_message[i] += shift;
					}
				} else {
					code_message.push(split_message[i].charCodeAt(0))
				}
				split_message[i] = String.fromCharCode(code_message[i]);
			}
			//split_message.map(String.fromCharCode((split_message[i].charCodeAt(0) - 3)));
			return split_message.join("");
		},
		uncipher: function(message) { 
			var shift = -3;
			var split_message = message.split("");
			var code_message = [];
			for (var i = 0; i < split_message.length; i++) {
				if ((split_message[i] >= "A" && split_message[i] <= "Z") || (split_message[i] >= "a" && split_message[i] <= "z"))
				{
					code_message.push(split_message[i].charCodeAt(0))
					if (code_message[i] + shift > 122){
						code_message[i] = code_message[i] + shift - 25;
					} else if (code_message[i] + shift < 97) {
						code_message[i] = code_message[i] + shift + 25;
					} else {
						code_message[i] += shift;
					}
				} else {
					code_message.push(split_message[i].charCodeAt(0))
				}
				split_message[i] = String.fromCharCode(code_message[i]);
			}
			//split_message.map(String.fromCharCode((split_message[i].charCodeAt(0) - 3)));
			return split_message.join("");
		}
	};
}

var cipher = module_cipher();

encrypted_message = cipher.cipher("brutus");
encrypted_message = cipher.uncipher(encrypted_message);

//COMMON FOR BOTH

console.log(encrypted_message);