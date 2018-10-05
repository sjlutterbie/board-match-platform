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
const orgProfileView = require('../client/views/orgProfile');

describe('Organization Profile View', function() {
  
  // Test the primary view function
  describe('orgProfile.buildView()', function() {
    
    it('Should exist', function() {
      expect(orgProfileView.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const orgProfileViewContent = orgProfileView.buildView();
    
    it('Should return a string', function() {
      expect(orgProfileViewContent).to.be.a('string');
    });
    
  });
  
  // Test the HTML the module injects
  describe('orgProfileView HTML structure', function() {
    
    // Initiate a clean DOM
    const _domBody = domBody;
    
    // Insert the HTML
    _domBody.innerHTML = orgProfileView.buildView();
    
    it('Should inject the ouput', function() {
      expect(_domBody.innerHTML)
        .to.equal(orgProfileView.buildView());
    });
    
  });
  
});