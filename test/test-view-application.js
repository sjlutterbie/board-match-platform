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
const appView = require('../client/views/application');

describe('Application View', function() {
  
  // Test the primary build function
  describe('appView.buildView()', function() {
    
    it('Should exist', function() {
      expect(appView.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const appViewContent = appView.buildView();
    
    it('Should return a string', function() {
      expect(appViewContent).to.be.a('string');
    });
    
  });
  
  // Test the HTML the module injects
  describe('applicationView HTML structure', function() {
    
    // Initiate a clean DOM
    const _domBody = domBody;
    
    // Insert the HTML
    _domBody.innerHTML = appView.buildView();
    
    it('Should inject the ouput', function() {
      expect(_domBody.innerHTML)
        .to.equal(appView.buildView());
    });
    
  });
  
})