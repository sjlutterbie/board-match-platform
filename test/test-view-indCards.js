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

// Load required module  
const indCards = require('../client/views/indCards');
const mAPI = require('../server/mockAPI');

const profId = mAPI.sessionData.indProfiles[0].id;

describe('Individual Profile Cards', function() {
  
  describe('overviewCard()', function() {
    it('Should be a function', function() {
      expect(indCards.overviewCard).to.be.a('function');
    });
    it('Should return a string', function() {
      expect(indCards.overviewCard(profId)).to.be.a('string');
    });
    it('Should inject the HTML correctly', function() {
      // Insert the HTML
      domBody.innerHTML = indCards.overviewCard(profId);
      // Test
      expect(domBody.innerHTML).to.equal(indCards.overviewCard(profId));
      // Reset test DOM
      domBody.innerHTML = '';
      
    });
  });
  
  describe('linekdInCard()', function() {
    it('Should be a function', function() {
      expect(indCards.linkedInCard).to.be.a('function');
    });
    it('Should return a string', function() {
      expect(indCards.linkedInCard(profId)).to.be.a('string');
    });
    it('Should inject the HTML correctly', function() {
      // Inject HTML
      domBody.innerHTML = indCards.linkedInCard(profId);
      // Test
      expect(domBody.innerHTML).to.equal(indCards.linkedInCard(profId));
      // Reset test DOM
      domBody.innerHTML = '';
    });
  });

});
