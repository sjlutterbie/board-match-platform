'use strict';

//NOTE: These are rapid, static prototypes, and have not yet received test
//  test coverage.

const { buildCard } = require('./components');

function overviewCard() {
 
  let outputHTML = `
    <h2>Overview</h2>
    <h3>orgName</h3>
    <p>Summary</p>
    <p><a href="#">email</a> | <a href="#">phone</a></p>
    <button>Edit</button>
    `.trim();
 
 outputHTML = buildCard(outputHTML);
 return outputHTML;
  
}

function openPositionCard() {
  
  let outputHTML = `
  <h2>Organization</h2>
  <h3>Title</h3>
  <p>Summary</p>
  <button>Edit</button>
  <button>View Applications</button>
  `.trim();
  
  outputHTML = buildCard(outputHTML);
  
  return outputHTML;
  
}

function applicationsCard() {
  
  let outputHTML = `
  <h2>Organization</h2>
  <h3>Title</h3>
  <p>Summary</p>
  <div style="border: 1px solid #ccc; padding: 4px;">
    <h3>fName lName</h3>
    <p>Message</p>
    <p><a href="#">View Profile</a></p>
  </div>
  <div style="border: 1px solid #ccc; padding: 4px;">
    <h3>fName lName</h3>
    <p>Message</p>
    <p><a href="#">View Profile</a></p>
  </div>
  <div style="border: 1px solid #ccc; padding: 4px;">
    <h3>fName lName</h3>
    <p>Message</p>
    <p><a href="#">View Profile</a></p>
  </div>
  `.trim();
  
  outputHTML = buildCard(outputHTML);
  return outputHTML;
  
}










///////////////////////////////////////////////////////////////////////////////

module.exports = {
  overviewCard,
  openPositionCard,
  applicationsCard
};
