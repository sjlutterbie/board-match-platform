'use strict';

// Load the mockAPI module
const { openPositions } = require('../../server/mockAPI');

const {buildCard} = require('./components');

function indOpenPosCard() {
  
  let outputHTML = `
  <h2>Organization</h2>
  <h3>Title</h3>
  <p>Summary...</p>
  <button>View more / Apply (inactive)</button>
  `.trim();
  
  outputHTML = buildCard(outputHTML);
  return outputHTML;
  
}


////

module.exports = {
  indOpenPosCard
};