'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

// Create DOM testing environment
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const domBody = new JSDOM(
  '<!DOCTYPE html><html><body></body></html>').window.document
  .querySelector('body');
  
// Load module
const vC = require('../client/views/components');

// CONTENT CARD

describe('Content Card component', function() {
  
  describe('buildCard()', function() {
    
    it('Should be a function', function() {
      expect(vC.buildCard).to.be.a('function');
    });
    
    it('Should return a string', function() {
      expect(vC.buildCard()).to.be.a('string');
    });
    
    it('Should have the expected HTML structure', function() {
      // Insert into test DOM
      domBody.innerHTML = vC.buildCard();
      // Test
      expect(domBody.firstChild.nodeName).to.equal('SECTION');
      expect(domBody.firstChild.getAttribute('class')).to.equal('card js-card');
      expect(domBody.firstChild.innerHTML).to.equal('');
      // Reset DOM
      domBody.innerHTML = '';
    });
  });
  
  describe('buildCard(inputString)', function() {
    
    it('Should have the expected HTML structure', function() {
      const testData = [
        'String 1',
        '<p>String 2</p>',
        '<p><em>String 3</em></p>'
      ];
      testData.forEach(function(testCase) {
        // Insert into test DOM
        domBody.innerHTML = vC.buildCard(testCase);
        // Test
        expect(domBody.firstChild.getAttribute('class')).to.equal('card js-card');
        expect(domBody.firstChild.innerHTML).to.equal(testCase);
        // Reset test DOM
        domBody.innerHTML = '';
      });
    });
  });
  
  describe('buildCard(inputString, classes)', function() {
    
    it('Should have the expected HTML structure', function() {
      const testData = [
        ['Case 1', ' '],
        ['Case 2', 'class1'],
        ['Case 3', 'class1 class2'], 
        ['Case 4', ['class1']],
        ['Case 5', ['class1', 'class2']]
      ];
      testData.forEach(function(testCase) {
        // Insert into test DOM
        domBody.innerHTML = vC.buildCard(testCase[0], testCase[1]);
        // Expected output
        let classes = '';
        if (typeof testCase[1] === 'string') {
          classes = testCase[1];
        } else if (typeof testCase[1] === 'object') {
          classes = testCase[1].join(' ').trim();
        }
        const classString = ('card js-card ' + classes).trim();
        // Test
        expect(domBody.firstChild.innerHTML).to.equal(testCase[0]);
        expect(domBody.firstChild.getAttribute('class')).to.equal(classString);
        // Reset test DOM
        domBody.innerHTML = '';
      });
    });  
  });
});