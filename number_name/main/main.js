function translateNumberStrsToName(numberStr) {
  var numberStrs = splitNumberStr(numberStr);
  var names = translateNumberStrs(numberStrs);
}

function splitNumber(numberStr) {
  numberStr = reverseString(numberStr);
  var partsCount = Math.ceil(numberStr.length / 3);

  var numberStrs = [];
  for (var i = partsCount - 1; i >= 0; i--) {
    var startIndex = i * 3;
    var partString = reverseString(numberStr.substr(startIndex, 3));
    numberStrs.push(partString);
  }

  return numberStrs;
}

function reverseString(str) {
  var reversedStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function translateNumbers(numberStrs, digitsWords, tensWords) {
  var names = [];
  for (var i = 0; i < numberStrs.length; i++) {
    numberStr = numberStrs[i]
    var hundred = translateHundreds(numberStr, digitsWords);
    var twoDigit = translateTensAndDigits(numberStr, digitsWords, tensWords);
    var name = (hundred && twoDigit) ?
               (hundred + ' ' + 'and' + ' ' + twoDigit) : (hundred + twoDigit);
    names.push(name);
  }

  return names;
}

function translateHundreds(numberStr, digitsWords) {
  if (numberStr.length == 3 && numberStr.charAt(0) != '0') {
    return digitsWords[parseInt(numberStr.charAt(0))] + ' hundred';
  }
  return '';
}

function translateTensAndDigits(numberStr, digitsWords, tensWords) {
  var twoDigit = parseInt(numberStr) % 100;
  if (twoDigit < 20) {
    return digitsWords[twoDigit];
  } else {
    var tens = parseInt(twoDigit / 10);
    var digit = parseInt(twoDigit % 10);
    return tensWords[tens] + ' ' + digitsWords[digit];
  }
}

function addUnit(names) {
  if (names[names.length - 2]) {
    names[names.length - 2] += ' thousand';
  }
  if (names[names.length - 3]) {
    names[names.length - 3] += ' million';
  }
  return names;
}

function formatNames(names) {
  var formatName = '';

  addComma(names);
  addAnd(names);

  for (var i = 0; i < names.length; i++) {
    formatName += names[i];
  }

  return formatName;
}

function addAnd(names) {
  if (names[1] && names[1].indexOf(' and ') == -1) {
    names[1] = ' and ' + names[1];
  }
  if (names[2] && names[1] && names[2].indexOf(' and ') == -1) {
    names[2] = ' and ' + names[2];
  }
}

function addComma(names) {
  if (names.length == 3 && names[1] == '' && names[0] && names[2].indexOf(' and ') != -1) {
    names[0] += ',';
  }
  for (var i = 0; i < names.length; i++) {
    var next = names[i+1];
    if ((next||names[i+2]) && names[i] && next.indexOf(' and ') != -1) {
      names[i] += ',';
    }
  }
}
