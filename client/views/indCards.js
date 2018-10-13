'use strict';

//NOTE: These are rapid, static prototypes, and have not yet received test
//  test coverage.

const {buildCard} = require('./components');

function overviewCard(sessionData) {

  let outputHTML = `
    <h2>Overview</h2>
    <h3>firstName lastName</h3>
    <p>Summary</p>
    <p><a href="#">email</a> | <a href="#">phone</a></p>
    <button>Edit</button>
  `.trim();

  outputHTML = buildCard(outputHTML);

  console.log(sessionData);

  return outputHTML;
  
}

function linkedInCard() {
  
  let outputHTML = `
  <h2>LinkedIn</h2>
  <h3>URL</h3>
  <button>Edit</button>
  `.trim();
  
  outputHTML = buildCard(outputHTML);
  
  return outputHTML;
  
}

function additionalExperienceCard() {
  
  let outputHTML = `
  <h2>Additional Experience</h2>
  <h3>Professional</h3>
  
  <p>Organization (startDate - endDate)</p>
  <p>Description</p>
  
  <p>Organization (startDate - endDate)</p>
  <p>Description</p>
  
  <h3>Service</h3>

  <p>Organization (startDate - endDate)</p>
  <p>Description</p>

  <p>Organization (startDate - endDate)</p>
  <p>Description</p>
  
  <h3>Education/Training</h3>

  <p>Organization (startDate - endDate)</p>
  <p>Description</p>

  <p>Organization (startDate - endDate)</p>
  <p>Description</p>
  <button>Edit</button>
  `.trim();
  
  
  outputHTML = buildCard(outputHTML);
  return outputHTML;
  
}


function openPositionCard() {
  
  let outputHTML = `
  <h2>Organization</h2>
  <h3>title</h3>
  <p>Summary...</p>
  <button>View more / Apply</button>
  `.trim();
  
  
  outputHTML = buildCard(outputHTML);
  return outputHTML;
  
}

function submittedAppCard() {
  
  let outputHTML = `
  <h2>Organization</h2>
  <h3>title</h3>
  <p>Summary...</p>
  <h3>Your message</h3>
  <p>Message...</p>
  <button>Show less</button>
  `.trim();
  
  outputHTML = buildCard(outputHTML);
  return outputHTML;
  
}


////////////////////////////////////////////////////////////////////////////////

module.exports = {
  overviewCard,
  linkedInCard,
  additionalExperienceCard,
  openPositionCard,
  submittedAppCard
};