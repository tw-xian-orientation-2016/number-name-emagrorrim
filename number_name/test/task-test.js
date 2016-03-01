describe('splitNumberString', function() {
  var inputs;

  beforeEach(function() {
    inputs = ['43112603', '1001', '2'];
  });

  it('should split number into array', function() {

    var outputs = [];
    for (var i = 0; i < inputs.length; i++) {
      outputs.push(sp)
    }

    var expectObject = [
      ['43', '112', '603'],
      ['1','001'],
      ['2']
    ];

    expect(output).toEqual(expectObject);
  });
});
