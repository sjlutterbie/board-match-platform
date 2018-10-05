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
const portalView = require('../client/views/portal');

describe('Portal View', function() {
  
  // Test the primary function
  describe('portalView.buildView()', function() {
    
    it('It should exist', function() {
      expect(portalView.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const portalViewContent = portalView.buildView();
    
    it('Should return a string', function() {
      expect(portalViewContent).to.be.a('string');
    });
    
  });
  
  // Test the HTML the module injects
  describe('portal View HTML structure', function() {
    
    // Initiate a clean DOM
    //  NOTE: Not the standard test DOM, because portalView.buildView
    //    creates a full HTML document.
    const _domBody = new JSDOM();
    
    // Insert the HTML
    _domBody.innerHTML = portalView.buildView();
    
    it('Should inject the ouput', function() {
      expect(_domBody.innerHTML)
        .to.equal(portalView.buildView());
    });
    
  });
  
});