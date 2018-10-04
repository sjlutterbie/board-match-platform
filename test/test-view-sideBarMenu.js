'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

//Load the module
const sideBarMenuView = require('../client/views/sideBarMenu');

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
  
});