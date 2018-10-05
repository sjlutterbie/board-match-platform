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
const dashboardView = require('../client/views/dashboard');

describe('Dashboard View', function() {
  
  // Test the primary view function
  describe('dashboard.buildView()', function() {
    
    it('Should exist', function() {
      expect(dashboardView.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const dashboardViewContent = dashboardView.buildView();
    
    it('Should return a string', function() {
      expect(dashboardViewContent).to.be.a('string');
    });
  });
  
  // Test the HTML the module injects
  describe('dashboardView HTML structure', function() {
    
    // Initiate a clean DOM
    const _domBody = domBody;
    
    // Insert the HTML
    _domBody.innerHTML = dashboardView.buildView();
    
    it('Should inject the ouput', function() {
      expect(_domBody.innerHTML)
        .to.equal(dashboardView.buildView());
    });
    
  });
  
});