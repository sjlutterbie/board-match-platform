'use strict';



function buildCard(inputString, classes) {

  // Prevent 'undefined' from outputting due to missed argument
  if (!inputString) {
    inputString = '';
  }
  
  // Prevent 'undefined' class due to missed argument
  if(!classes) {
    classes = '';
  }
  
  // Handle array class lists
  if (typeof classes === 'object') {
    classes = classes.join(' ').trim();
  }
  
  // Clear up excess whitespace
  classes = `card js-card ${classes}`.trim();
  
  console.log(classes);
  
  const htmlOutput= `<section class="${classes}">${inputString}</section>`;
  
  return htmlOutput;

}


module.exports = {
  buildCard
};