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


// Load the view module
const indProfileView = require('../client/views/indProfile');

describe('Individual Profile View', function() {
  
  // Test the primary view function
  describe('indProfile.buildView()', function() {
    
    it('Should exist', function(){
      expect(indProfileView.buildView).to.not.be.undefined;
    });
    
    // Generate the view
    const indProfViewContent = indProfileView.buildView();
    
    it('Should return a string', function() {
      expect(indProfViewContent).to.be.a('string');
    });
    
  });
  
  // Test the HTML the module injects
  describe('indProfileView HTML structure', function() {
    
    // Initiate a clean DOM
    const _domBody = domBody;
    
    // Insert the HTML
    _domBody.innerHTML = indProfileView.buildView();
    
    it('Should inject the ouput', function() {
      expect(_domBody.innerHTML)
        .to.equal(indProfileView.buildView());
    });
    
  });
  


});