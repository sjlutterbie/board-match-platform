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
const sideBarMenuView = require('../client/views/tabBarMenu');

describe('SideBarMenu View', function() {
  
  // Test the primary view function
  describe('sideBarMenu.buildView()', function() {
    
    it('Should exist', function() {
      expect(sideBarMenuView.buildView).to.not.be.undefined;
    });

    // Generate the view    
    const sideBarMenuViewContent = sideBarMenuView.buildView();
    
    it('Should return a string', function() {
      expect(sideBarMenuViewContent).to.be.a('string');
    });
    
  });
  
  // Test the HTML the module injects
  describe('sideBarMenu HTML View structure', function() {
    
    // Initiate a clean DOM
    const _domBody = domBody;
    
    // Insert the HTML
    _domBody.innerHTML = sideBarMenuView.buildView();
    
    it('Should inject the ouput', function() {
      expect(_domBody.innerHTML)
        .to.equal(sideBarMenuView.buildView());
    });
    
    // TEMPORARY DEVELOPMENT TEST
    it('Should inject a single <p> element', function() {
      expect(_domBody.children.length).to.equal(1);
      expect(_domBody.children[0].tagName).to.equal('P');
    });

    
  });
  
});