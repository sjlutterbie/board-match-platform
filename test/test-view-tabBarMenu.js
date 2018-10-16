'use strict';

// Load testing packages
const chai = require('chai');

// Create DOM testing environment
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const domBody = new JSDOM(
      '<!DOCTYPE html><html><body></body></html>').window.document
      .querySelector('body');


// Simplify expect functions
const expect = chai.expect;

//Load the module
const tabBar = require('../client/views/tabBarMenu');

describe('tabBar Menu View', function() {
  
  // Test the primary view function
  describe('tabBar.buildView()', function() {
    
    it('Should exist', function() {
      expect(tabBar.buildView).to.not.be.undefined;
    });

    // Generate the view    
    const tabBarViewContent = tabBar.buildView();
    
    it('Should return a string', function() {
      expect(tabBarViewContent).to.be.a('string');
    });
    
  });
  
  // Test the HTML the module injects
  describe('tabBarMenu HTML View structure', function() {
    
    it('Should inject the output', function() {
      // Insert the HTML
      domBody.innerHTML = tabBar.buildView();
      // Test
      expect(domBody.innerHTML).to.equal(tabBar.buildView());
      // Reset the test DOM
      domBody.innerHTML = '';
    });
    
  });
  
});