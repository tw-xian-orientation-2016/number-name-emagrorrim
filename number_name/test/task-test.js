describe('splitNumber', function() {
  var inputs;

  beforeEach(function() {
    inputs = ['3112603', '1001', '2'];
  });

  it('should split number into array', function() {

    var outputs = [];
    for (var i = 0; i < inputs.length; i++) {
      outputs.push(splitNumber(inputs[i]));
    }

    var expectObject = [
      ['3', '112', '603'],
      ['1','001'],
      ['2']
    ];

    expect(outputs).toEqual(expectObject);
  });
});

describe('translateNumbers', function() {
  var inputs;

  beforeEach(function() {
    inputs = ['12', '43', '123', '000'];
    digitsWords = loadDigitsWords();
    tensWords = loadTensWords();
  });

  it('shoult translate hundred', function() {

    var outputs = [];
    for (var i = 0; i < inputs.length; i++) {
      outputs.push(translateHundreds(inputs[i], digitsWords));
    }

    var expectObject = [
      '',
      '',
      'one hundred',
      ''
    ];

    expect(outputs).toEqual(expectObject);
  });

  it('shoult translate tens and digits', function() {

    var outputs = [];
    for (var i = 0; i < inputs.length; i++) {
      outputs.push(translateTensAndDigits(inputs[i], digitsWords, tensWords));
    }

    var expectObject = [
      'twelve',
      'fourty three',
      'twenty three',
      ''
    ];

    expect(outputs).toEqual(expectObject);
  });

  it('shoult translate numbers', function() {
    inputs = [
      ['12', '000','001'],
      ['2', '014', '245']
    ];
    var outputs = [];
    for (var i = 0; i < inputs.length; i++) {
      outputs.push(translateNumbers(inputs[i], digitsWords, tensWords));
    }

    var expectObject = [
      ['twelve', '', 'one'],
      ['two', 'fourteen', 'two hundred and fourty five']
    ];

    expect(outputs).toEqual(expectObject);
  });

});
