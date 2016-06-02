// Positions:        0   1   2  3  4   5   6
var exampleArray = [ 2, -5, 10, 5, 4, -10, 0];

var results = check_sum_zero(exampleArray);
console.log(results);

function check_sum_zero(exampleArray) {
	var selected_pairs = [];
	for (var i = 0; i < exampleArray.length; i++) {
		for(var j = 0; j < exampleArray.length; j++) {
			if(exampleArray[i] + exampleArray[j] === 0) {
				if(is_in_array(exampleArray, i, j)) {
					selected_pairs.push(i+","+j)
				}
			}
		}
	}
	return selected_pairs;
}

function is_in_array(numberArray, x, y) {
	for (var i = 0; i < numberArray.length; i++) {
		if(numberArray[i] == x+","+y || numberArray[i] == y+","+x) {
			return false;
		} else {
			return true;
		}
	}
}

//=> [ "1,3" , "2,5", "6,6" ]