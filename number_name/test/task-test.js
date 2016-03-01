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
    inputs = ['', '43', '123'];
    digitsWords = loadDigitsWords();
  });

  it('shoult translate hundred', function() {

    var outputs = [];
    for (var i = 0; i < inputs.length; i++) {
      outputs.push(translateHundreds(inputs[i], digitsWords));
    }

    var expectObject = [
      '',
      '',
      'one hundred'
    ];

    expect(outputs).toEqual(expectObject);
  });
});
