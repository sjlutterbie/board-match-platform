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

const headerMenuView = require('../client/views/headerMenu');

describe('Header Menu View', function() {
  
  // Test the primary view function
  describe('headerMenu.buildView()', function() {
    
    it('Should exist', function() {
      expect(headerMenuView.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const headerMenuViewContent = headerMenuView.buildView();
    
    it('Should return a string', function() {
      expect(headerMenuViewContent).to.be.a('string');
    });
    
  });
  
  // Test the HTML the module injects
  describe('headerMenuView HTML structure', function() {
    
    // Initiate a clean DOM
    const _domBody = domBody;
    
    // Insert the HTML
    _domBody.innerHTML = headerMenuView.buildView();
    
    it('Should inject the correct output', function() {
      expect(_domBody.innerHTML)
        .to.equal(headerMenuView.buildView());
    });
    
    it('Should inject a single <ul>, with two <li> children', function() {
      expect(_domBody.children.length).to.equal(1);
      expect(_domBody.firstChild.tagName).to.equal('UL');
      expect(_domBody.querySelector('ul').children.length).to.equal(2);
    });
    
    it('Each <li> element should include a single <a> element', function() {
      
      const ulContents = _domBody.querySelector('ul').children;
      
      for(let i = 0; i < ulContents.length; i++) {
        expect(ulContents[i].children.length).to.equal(1);
        expect(ulContents[i].children[0].tagName).to.equal('A');
      }
    });
  });
});
