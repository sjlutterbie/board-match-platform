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
  
// Load sessionData instance
const mockData = require('../server/mockData');

const sessionData = mockData.buildSessionData();

// Load first indProfile in dataset for testing purposes.
const profId = sessionData.indProfiles[0].id;

// Load required module  
const indCards = require('../client/views/indCards');


describe('Individual Profile Cards', function() {
  
  describe('overviewCard()', function() {
    it('Should be a function', function() {
      expect(indCards.overviewCard).to.be.a('function');
    });
    it('Should return a string', function() {
      expect(indCards.overviewCard(profId)).to.be.a('string');
    });
  });
  
  describe('linekdInCard()', function() {
    it('Should be a function', function() {
      expect(indCards.linkedInCard).to.be.a('function');
    });
    it('Should return a string', function() {
      expect(indCards.linkedInCard(profId)).to.be.a('string');
    });
  });

});
