function translateNumbersToName(number) {
  var numbers = splitNumber(number);
  var names = translateNumbers(numbers);
}

function splitNumber(number) {
  number = reverseString(number);
  var partsCount = Math.ceil(number.length / 3);

  var numbers = [];
  for (var i = partsCount - 1; i >= 0; i--) {
    var startIndex = i * 3;
    var partString = reverseString(number.substr(startIndex, 3));
    numbers.push(partString);
  }

  return numbers;
}

function reverseString(str) {
  var reversedStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function translateNumbers(numbers) {

  var names = [];
  for (var i = 0; i < numbers.length; i++) {

  }
}

function translateHundreds(number, digitsWords) {
  if (number.length == 3) {
    return digitsWords[parseInt(number.charAt(0))] + ' hundred';
  }
  return '';
}

function translateTens(number) {

}
