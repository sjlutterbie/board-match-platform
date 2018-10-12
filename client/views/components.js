'use strict';

const { arrayToClassList } = require('../controllers/common');

// CARD ELEMENT

function buildCard(inputString='', classes='') {
  // Create a UI 'card'  - a <section> element with pre-determined stylings.
  // inputString: Content of card
  //   NOTE: This function does not validate string as html
  // classes: Optional custom classes

  
  // Handle array class lists
  if (Array.isArray(classes)) {
    classes = arrayToClassList(classes);
  }
  
  // Clear up excess whitespace
  classes = `card js-card ${classes}`.trim();
  
  // Build card HTML
  const htmlOutput= `<section class="${classes}">${inputString}</section>`;
  
  return htmlOutput;
}

// BUTTON ELEMENT

function buildButton(labelString='', classes='') {
  // Create a UI 'button' that can accept custom class lists
  
  // Handle array class lists
  if (Array.isArray(classes)) {
    classes = arrayToClassList(classes);
  }

  classes = `js-button ${classes}`.trim();

  const htmlOutput = `<button class="${classes}">${labelString}</button>`;
  
  // TODO: Insert array-to-class function
  
  return htmlOutput;
  
}


module.exports = {
  buildCard,
  buildButton
};