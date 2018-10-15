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

// Load required module  
const indCards = require('../client/views/indCards');


describe('Individual Profile Overview Card', function() {
  
  describe('oveviewCard()', function() {
    it('Should be a function', function() {
      expect(indCards.overviewCard).to.be.a('function');
    });
    it('Should return a string', function() {
      expect(indCards.overviewCard(sessionData)).to.be.a('string');
    });
  });

});