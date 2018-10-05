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
const recruitingView = require('../client/views/recruiting');

describe('Recruiting View', function() {
  
  // Test the primary view function
  describe('recruitingView.buildView()', function() {
    
    it('Should exist', function() {
      expect(recruitingView.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const recruitingViewContent = recruitingView.buildView();
    
    it('Should return a string', function () {
      expect(recruitingViewContent).to.be.a('string');
    });
  });
  
  // Test the HTML the module injects
  describe('Recruiting View HTML structure', function() {
    
    // Initiate a clean DOM
    const _domBody = domBody;
    
    // Insert the HTML
    _domBody.innerHTML = recruitingView.buildView();
    
    it('Should inject the ouput', function() {
      expect(_domBody.innerHTML)
        .to.equal(recruitingView.buildView());
    });
    
  });
  
});