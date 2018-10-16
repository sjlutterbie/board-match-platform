'use strict';

const indCards = require('./indCards');
const orgCards = require('./orgCards');
const posCards = require('./posCards');

function buildView(userAccount) {

  // Initialize blank content
  let outputHTML = '';
  
  // Add Ind Cards
  outputHTML += '<h2>INDIVIDUAL CARDS</h2>';
  outputHTML += indCards.overviewCard(userAccount.relations.indProfile);
  outputHTML += indCards.linkedInCard(userAccount.relations.indProfile);

  outputHTML += '<h2>ORG CARDS</h2>';
  outputHTML += orgCards.overviewCard();
  
  outputHTML += '<h2>POSITION CARDS</h2>';
  outputHTML += posCards.indOpenPosCard();
  
  outputHTML += '<h2>APPLICATION CARDS</h2>';
  outputHTML += orgCards.applicationsCard();
  //Ad Org Cards
  

  // Render output
  return outputHTML;
}

////////////////////////////////////////////////////////////////////////////////

module.exports = {
  buildView
};
