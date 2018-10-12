'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

var controllers = require('../client/controllers/common');

describe('Handling [class1, class2...] as parameter', function() {
  
  describe('arrayToClassList(inputArray)', function() {
    
    it('Should be a function', function() {
      expect(controllers.arrayToClassList).to.be.a('function');
    });
    
    it('Should return a string', function() {
      expect(controllers.arrayToClassList([])).to.be.a('string');
    });
    
    it('Should only accept an array as a parameter', function() {
      const testData = [
        [["array"], true],
        ["string", false],
        [1, false],
        [{foo: "bar"}, false],
        [{array: ["close", "but", "no"]}, false],
        [function defNot(){}, false]
      ];
      testData.forEach(function(testCase) {
        if(testCase[1]) {
          // Should NOT throw error
          expect(controllers.arrayToClassList.bind(controllers, testCase[0]))
            .to.not.throw('arrayToClassList(): Paramater not an array');
        } else {
          // SHOULD throw error
          expect(controllers.arrayToClassList.bind(controllers, testCase[0]))
            .to.throw('arrayToClassList(): Paramater not an array');
        }
      });
    });
    
    it('Should only accept an array of strings', function() {
      const testData = [
        [["String1"], true],
        [["String1", "String2"], true],
        [["String1", 1], false],
        [[1,"String1"], false],
        [["String1", ["String2"]], false],
        [["String1", {foo: "String1"}], false],
        [["String1", function defNot(){}], false]
      ];
      testData.forEach(function(testCase) {
        if(testCase[1]) {
          // Should NOT throw error
          expect(controllers.arrayToClassList.bind(controllers, testCase[0]))
            .to.not.throw('arrayToClassList(): Array contains invalid elements');
        } else {
          // SHOULD throw error
          expect(controllers.arrayToClassList.bind(controllers, testCase[0]))
            .to.throw('arrayToClassList(): Array contains invalid elements');
        }
      });
    });
    
    it('Should handle arrays of N strings', function() {
      const arrayCount = 50;
      const testCase = [];
      for (let i = 1; i <= arrayCount; i++) {
        testCase.push("a");
        const expectedOutput = testCase.join(' ').trim();
        expect(controllers.arrayToClassList(testCase)).to.equal(expectedOutput);
      }
    });
  });
});