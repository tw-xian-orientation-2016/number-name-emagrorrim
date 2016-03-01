function splitNumberString(numberString) {
  numberString = reverseString(numberString);
  var partsCount = Math.ceil(numberString.length / 3);
  var partLength = 3;

  var numberStrings = [];
  for (var i = partsCount - 1; i >= 0; i--) {
    var startIndex = i * 3;
    var partString = reverseString(numberString.substr(startIndex, partLength));
    numberStrings.push(partString);
  }

  return numberStrings;
}

function reverseString(str) {
  var reversedStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
