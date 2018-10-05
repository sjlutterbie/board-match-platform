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


// Load the module
const openPositionsView = require('../client/views/openPositions');

describe('Open Positions View', function(){
  
  // Test the primary view function
  describe('openPositions.buildView()', function() {
    
    it('Should exist', function() {
      expect(openPositionsView.buildView).to.not.be.undefined;
    });
    
    // Build view
    const openPositionsViewContent = openPositionsView.buildView();
    
    it('Should return a string', function() {
      expect(openPositionsViewContent).to.be.a('string');
    });

  });
  
  // Test the HTML the module injects
  describe('openPositionsView HTML structure', function() {
    
    // Initiate a clean DOM
    const _domBody = domBody;
    
    // Insert the HTML
    _domBody.innerHTML = openPositionsView.buildView();
    
    it('Should inject the ouput', function() {
      expect(_domBody.innerHTML)
        .to.equal(openPositionsView.buildView());
    });
    
  });
  
});