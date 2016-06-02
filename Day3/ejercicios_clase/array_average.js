var numbers = '80:70:90:100';
averageColon(numbers);
//=> 85

function averageColon(stringNumbers) {
	var arrayOfNumbers = stringNumbers.split(":")
	var sum = 0;
	var average = 0;
	for( i = 0; i < arrayOfNumbers.length; i++) {
		sum += parseInt(arrayOfNumbers[i]);
	}
	average = sum / arrayOfNumbers.length;
	console.log(average);
}