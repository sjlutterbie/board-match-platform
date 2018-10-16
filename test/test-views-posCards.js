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
  
// Load required modules
const openPos = require('../client/views/posCards');
const mAPI = require('../server/mockAPI');

describe('Open Position Cards', function() {
  
  // Load first open position for eesting purposes
  const posId = mAPI.sessionData.positions[0].id;
  
  describe('indOpenPosCard()', function() {
    it('Should be a function', function() {
      expect(openPos.indOpenPosCard).to.be.a('function');
    });
    it('Should return a string', function() {
      expect(openPos.indOpenPosCard(posId)).to.be.a('string');
    });
    it('Should inject the HTML correctly', function() {
      // Insert the HTML
      domBody.innerHTML = openPos.indOpenPosCard(posId);
      // Test
      expect(domBody.innerHTML).to.equal(openPos.indOpenPosCard(posId));
      // Reset the test DOM
      domBody.innerHTML = '';
    });
  });
  
});