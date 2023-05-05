const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turns');

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should return a boolean result', function() {
    const result = evaluateGuess('object', 'object')
    expect(result).to.equal(true);
    const result2 = evaluateGuess('array', 'object')
    expect(result2).to.equal(false);
   
  });  
});