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
  describe('buildView()', function() {
    
    it('Should be a function', function(){
      expect(indProfileView.buildView).to.be.a('function');
    });
    
    // Generate the view
    const indProfViewContent = indProfileView.buildView();
    
    it('Should return a string', function() {
      expect(indProfViewContent).to.be.a('string');
    });
    
    // Test the HTML the module injects
    describe('indProfileView HTML structure', function() {
  
      it('Should inject the ouput', function() {
        // Insert the HTML
        domBody.innerHTML = indProfileView.buildView();
        // Test  
        expect(domBody.innerHTML)
          .to.equal(indProfileView.buildView());
        // Reset the DOM
        domBody.innerHTML = '';
      });
    });
  });
});

